
import { AuthRepository, AuthDataSource, RegisterSegurityDTO, UserEntity } from "../../Repositories"

export class AuthRepositoryImpl implements AuthRepository {

    constructor(private readonly _repository: AuthDataSource) { }

    register(model: RegisterSegurityDTO): Promise<UserEntity> {
        return this._repository.register(model)
    }
}