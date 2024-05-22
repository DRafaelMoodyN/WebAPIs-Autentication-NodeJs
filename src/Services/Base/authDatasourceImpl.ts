import { AuthDataSource, RegisterSegurityDTO, UserEntity } from "../../Repositories"
import { CustomError, JwtAdapter } from "../../Configurations"
import { UserModel } from "../../Models"
import { UserMapper } from "../Mapper/userMapper"
import { LoginSegurityDTO } from "../../Repositories/Dto/loginDto";

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;

export class AuthDatasourceImpl implements AuthDataSource {
    constructor(
        private readonly hashFunction: HashFunction,
        private readonly compareFunction: CompareFunction
    ) { }

    async revalidarToken(model: string): Promise<any> {
        try {
            const user = await UserModel.findById(model).exec()
            const jwtToken = await JwtAdapter.generateToken({ id: model }, '2h')
            return UserMapper.loginEntityFromObject(user!, jwtToken)
        } catch (error) {
            if (error instanceof CustomError) throw error
            throw CustomError.internalServer()
        }
    }

    async login(model: LoginSegurityDTO): Promise<UserEntity> {
        const { email, password } = model;
        try {
            const exist = await UserModel.findOne({ email: email }).exec()
            if (!exist) throw CustomError.unauthorized('User does not exist')

            const isMatching = this.compareFunction(password, exist.password || '')
            if (!isMatching) throw CustomError.unauthorized('User does not exist')

            const jwtToken = await JwtAdapter.generateToken({ id: exist.id }, '2h')

            return UserMapper.loginEntityFromObject(exist, jwtToken)

        } catch (error) {
            if (error instanceof CustomError) throw error

            throw CustomError.internalServer()
        }
    }

    async register(model: RegisterSegurityDTO): Promise<UserEntity> {
        const { name, email, password } = model

        try {
            const existEmail = await UserModel.findOne({ email: email }).exec()
            if (existEmail) throw CustomError.badRequest("Ya existe este correo")

            const userCreate = await UserModel.create({
                name,
                email,
                password: this.hashFunction(password)
            })
            await userCreate.save()
            return UserMapper.userEntityFromObject(userCreate)

        } catch (error) {
            if (error instanceof CustomError) throw error

            throw CustomError.internalServer()
        }
    }
}