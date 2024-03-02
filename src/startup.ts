import { Program } from "./Webapis/program"
import { envs } from "./Configurations"
import { AppRoute } from "./Webapis/routes/appRoute"
import { MongoDbContext } from "./Models"

const startup = async () => {
    await MongoDbContext.connect(envs.MONGO_CONNECTION)
    new Program({ port: envs.PORT, router: AppRoute.routes }).start()
}

startup()