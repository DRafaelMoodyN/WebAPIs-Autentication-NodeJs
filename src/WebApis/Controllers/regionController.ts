import { Request, Response } from "express"

import { RegionRepository } from "../../Repositories/Repository/regionRepository"
import { CustomError } from "../../Configurations"

export class RegionController {

    constructor(private readonly _repository: RegionRepository) {
    }

    private handlerError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        console.log(error)
        return res.status(500).json({ error: "Server Internal Server" })
    }

    getCountry = async (req: Request, res: Response) => {
        this._repository.getCountry().then(data => {
            res.status(200).json(data)
        }).catch(error => {
            this.handlerError(error, res)
        })
    }

    geDepartament = async (req: Request, res: Response) => {
        const { id } = req.params;

        this._repository.getDepartament(Number(id)).then(data => {
            res.status(200).json(data)
        }).catch(error => {
            this.handlerError(error, res)
        })
    }
}