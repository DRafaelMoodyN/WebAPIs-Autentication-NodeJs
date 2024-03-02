import { Response, Request } from "express"
import { AuthRepository, RegisterSegurityDTO } from "../../Repositories"
import { CustomError } from "../../Configurations"
import { UserModel } from "../../Models"

export class AuthController {
    constructor(
        private readonly _repository: AuthRepository
    ) {
    }

    private handlerError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        console.log(error)
        return res.status(500).json({ error: "Server Internal Server" })
    }

    registerUser = async (req: Request, res: Response) => {
        const [error, dataValidate] = RegisterSegurityDTO.create(req.body)

        if (error) return res.status(403).json({ error })

        this._repository.register(dataValidate!).then(data => {
            res.status(201).json(data)
        }).catch(error => this.handlerError(error, res))
    }

    loginUser = async (req: Request, res: Response) => {
        res.json("auth")
    }

    getUser = async (req: Request, res: Response) => {
        UserModel.find().then(data => {
            res.status(200).json(data)
        }).catch(eror => res.status(500).json({ error: "Server Internal Error" }))
    }
}