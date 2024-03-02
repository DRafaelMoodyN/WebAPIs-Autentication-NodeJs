import { AuthDataSource, RegisterSegurityDTO, UserEntity } from "../../Repositories"
import { CustomError } from "../../Configurations"
import { UserModel } from "../../Models"
import { UserMapper } from "../Mapper/userMapper"

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;

export class AuthDatasourceImpl implements AuthDataSource {
    constructor(
        private readonly hashFunction: HashFunction,
        private readonly compareFunction: CompareFunction
    ) { }

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