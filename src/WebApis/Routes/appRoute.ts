import { Router } from "express"
import { AuthRoute } from "../routes/authRoute"
import { RegionRoute } from "../routes/regionRoute"
import { CatalogoRoute } from "../routes/catalogoRoute"

export class AppRoute {

    static get routes(): Router {
        const router = Router()

        router.use("/api/segurity", AuthRoute.routes)
        router.use("/api/region", RegionRoute.routes)
        router.use("/api/catalogo", CatalogoRoute.routes)

        return router
    }
}