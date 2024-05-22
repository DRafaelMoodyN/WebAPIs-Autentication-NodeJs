import { Router } from "express"
import { CatalogoController } from "../Controllers/catalogoController"
import { AuthMidleware } from "../../WebApis/Middleware/authMiddleware"
import { CatalogoDataSourceImpl } from "../../Services/Base/catalogoDataSourceImpl"
import { CatalogoRepositoryImpl } from "../../Services/Service/catalogoRepositoryImpl"

const middleware = [AuthMidleware.validateJwt]

export class CatalogoRoute {

    static get routes(): Router {
        const router = Router()

        const data = new CatalogoDataSourceImpl()

        const repository = new CatalogoRepositoryImpl(data)
        const controller = new CatalogoController(repository)

        router.get("/tipo-cliente", controller.getTipoCliente)

        return router
    }
}