import { UserEntity } from "../../Repositories"
import { CustomError } from "../../Configurations";

export class UserMapper {

    static userEntityFromObject(obj: { [key: string]: any }) {

        const { id, _id, name, email, password, roles } = obj;

        if (!_id || !id) throw CustomError.badRequest("El id es requerido")
        if (!name) throw CustomError.badRequest("El name es requerido")
        if (!email) throw CustomError.badRequest("El email es requerido")
        if (!roles) throw CustomError.badRequest("El rol es requerido")

        return new UserEntity(
            _id || id,
            name,
            email,
            password,
            roles
        )
    }

    static loginEntityFromObject(obj: { [key: string]: any }, token: any) {

        const { id, _id, name, email, password, roles } = obj;

        if (!_id || !id) throw CustomError.badRequest("El id es requerido")
        if (!name) throw CustomError.badRequest("El name es requerido")
        if (!email) throw CustomError.badRequest("El email es requerido")
        if (!roles) throw CustomError.badRequest("El rol es requerido")

        return new UserEntity(
            _id || id,
            name,
            email,
            password,
            roles,
            token
        )
    }
}