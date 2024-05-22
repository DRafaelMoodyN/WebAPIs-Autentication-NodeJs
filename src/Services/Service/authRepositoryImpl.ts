
import { AuthRepository, AuthDataSource, RegisterSegurityDTO, UserEntity } from "../../Repositories"
import { LoginSegurityDTO } from "../../Repositories/Dto/loginDto"

export class AuthRepositoryImpl implements AuthRepository {

    constructor(private readonly _repository: AuthDataSource) { }
    revalidarToken(model: string): Promise<any> {
        return this._repository.revalidarToken(model)
    }
    login(model: LoginSegurityDTO): Promise<UserEntity> {
        return this._repository.login(model)
    }

    register(model: RegisterSegurityDTO): Promise<UserEntity> {
        return this._repository.register(model)
    }
}