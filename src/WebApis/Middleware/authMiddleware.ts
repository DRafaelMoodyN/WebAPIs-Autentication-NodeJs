import { Request, Response, NextFunction } from "express"
import { JwtAdapter } from "../../Configurations"
import { UserModel } from "../../Models"

export class AuthMidleware {
    static validateJwt = async (req: Request, res: Response, next: NextFunction) => {
        const authorization = req.header('Authorization')

        if (!authorization)
            return res.status(400).json({ error: "No Token Provider" })

        if (!authorization.startsWith("Bearer "))
            return res.status(401).json({ error: "Invalidate Bearer token" })

        const token = await authorization.split(' ').at(1) || ''

        try {

            const payload = await JwtAdapter.validateToke<{ id: string }>(token)

            if (!payload)
                return res.status(401).json({ error: "Invalidate token" })

            const user = await UserModel.findById(payload.id).exec()

            if (!user)
                return res.status(401).json({ error: "Invalidate token - user not found" })

            req.body.user = user

        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" })
        }
        next()
    }
}