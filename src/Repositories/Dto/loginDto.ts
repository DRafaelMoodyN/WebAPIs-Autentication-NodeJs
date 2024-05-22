import { Validators } from "../../Configurations"

export class LoginSegurityDTO {

    private constructor(
        public email: string,
        public password: string,
    ) {
    }

    static create(obj: { [key: string]: any }): [string?,LoginSegurityDTO?] {
        const {  email, password } = obj

        if (!email) return ['El email es requerido']
        if (!Validators.email.test(email)) return ['El email no es valido']
        if (!password) return ['El email es requerido']

        return [
            undefined,
            new LoginSegurityDTO(email.toLowerCase(), password)
        ]
    }
}