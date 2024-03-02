import jwt from "jsonwebtoken"
import { envs } from "./envs"

const JWT_SEED = envs.JWT_SECRET

export class JwtAdapter {

    static async generateToken(payload: Object, duration: '2h'): Promise<string | null> {
        return new Promise((resolve) => {
            jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (error, token) => {
                if (error) return resolve(null)
                resolve(token!)
            })
        })
    }

    static validateToke<T>(token: string): Promise<T | null> {
        return new Promise((resolve) => {
            jwt.verify(token, JWT_SEED, (error, decoded) => {
                if (error) return resolve(null)
                resolve(decoded as T)
            })
        })
    }
}