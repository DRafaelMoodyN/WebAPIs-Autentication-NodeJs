import { Program } from "./Webapis/program"
import { envs } from "./Configurations"
import { AppRoute } from "./Webapis/Routes/appRoute"
import { MongoDbContext, SequelizeDbContext } from "./Models/context"
import { CountryModel, DepartamentModel, TipoClientModel } from "./Models/Models"

const startup = async () => {
    await MongoDbContext.connect(envs.MONGO_CONNECTION)
    SequelizeDbContext.authenticate()

    CountryModel.sync({ alter: true })
    DepartamentModel.sync({ alter: true })
    TipoClientModel.sync({ alter: true })
    
    new Program({ port: envs.PORT, router: AppRoute.routes }).start()
}

startup()