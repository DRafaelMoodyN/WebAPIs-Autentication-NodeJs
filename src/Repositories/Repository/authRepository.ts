import { RegisterSegurityDTO } from "../Dto/registerDto"
import { UserEntity } from "../Entities/userEntity"

export abstract class AuthRepository {
    abstract register(model: RegisterSegurityDTO): Promise<UserEntity>
}