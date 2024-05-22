import { LoginSegurityDTO } from "../Dto/loginDto"
import { RegisterSegurityDTO } from "../Dto/registerDto"
import { UserEntity } from "../Entities/userEntity"

export abstract class AuthRepository {
    abstract register(model: RegisterSegurityDTO): Promise<UserEntity>
    abstract login(model: LoginSegurityDTO): Promise<UserEntity>
    abstract revalidarToken(model: string): Promise<any>
}