import { Router } from "express"
import { AuthController } from "../Controllers/authController"
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../Services"
import { BcryptAdapter } from "../../Configurations"
import { AuthMidleware } from "../../WebApis/Middleware/authMiddleware"


const middleware = [AuthMidleware.validateJwt]

export class AuthRoute {

    static get routes(): Router {
        const router = Router()

        const data = new AuthDatasourceImpl(
            BcryptAdapter.hash,
            BcryptAdapter.compare
        )
        const repository = new AuthRepositoryImpl(data)
        const controller = new AuthController(repository)

        router.post("/login", controller.loginUser)
        router.post("/register", controller.registerUser)
        router.get("/list", middleware, controller.getUser)
        router.get("/revalidar-token", middleware, controller.revalidateToken)

        return router
    }
}