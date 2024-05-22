import { Router } from "express"
import { RegionController } from "../Controllers/regionController"
import { AuthDatasourceImpl, AuthRepositoryImpl, RegionDataSourceImpl, RegionRepositoryImpl } from "../../Services"
import { BcryptAdapter } from "../../Configurations"
import { AuthMidleware } from "../../WebApis/Middleware/authMiddleware"

const middleware = [AuthMidleware.validateJwt]

export class RegionRoute {

    static get routes(): Router {
        const router = Router()

        const data = new RegionDataSourceImpl()

        const repository = new RegionRepositoryImpl(data)
        const controller = new RegionController(repository)

        router.get("/country", controller.getCountry)
        router.get("/country/:id/departament", controller.geDepartament)

        return router
    }
}