import { Router } from "express"
import { AuthRoute } from "../routes/authRoute"


export class AppRoute {

    static get routes(): Router {
        const router = Router()

        router.use("/api/segurity", AuthRoute.routes)

        return router
    }
}