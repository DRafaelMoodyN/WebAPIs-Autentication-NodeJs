import { Validators } from "../../Configurations"

export class RegisterSegurityDTO {

    private constructor(
        public name: string,
        public email: string,
        public password: string,
    ) {
    }

    static create(obj: { [key: string]: any }): [string?, RegisterSegurityDTO?] {
        const { name, email, password } = obj

        if (!name) return ['El nombre es requerido']
        if (!email) return ['El email es requerido']
        if (!Validators.email.test(email)) return ['El email no es valido']
        if (!password) return ['El email es requerido']

        return [
            undefined,
            new RegisterSegurityDTO(
                name, email.toLowerCase(), password
            )
        ]
    }
}