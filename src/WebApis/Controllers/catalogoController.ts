import { Request, Response } from "express"
import { CustomError } from "../../Configurations"
import { CatalogoRepository } from "../../Repositories"

export class CatalogoController {

    constructor(private readonly _repository: CatalogoRepository) {
    }

    private handlerError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        console.log(error)
        return res.status(500).json({ error: "Server Internal Server" })
    }

    getTipoCliente = async (req: Request, res: Response) => {
        this._repository.getTipoClient().then(data => {
            res.status(200).json(data)
        }).catch(error => {
            this.handlerError(error, res)
        })
    }
}