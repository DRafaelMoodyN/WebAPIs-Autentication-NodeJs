import { Sequelize } from "sequelize"
import { TConnectionString, EDialect } from "../Poo"

const connectionString: TConnectionString = {
    database: "Crm",
    username: "drmoodyn",
    password: "QSvop7GbFZn6",
    host: 'ep-holy-salad-a5rtzs3t.us-east-2.aws.neon.tech',
    dialect: EDialect.Postgres,
}

class SequelizeDbContext {
    private static _dbContext: Sequelize;

    constructor() {
        throw new Error("Singleton: Esta class no se puede instanciar")
    }

    private static getInstance = (): Sequelize => {
        if (!this._dbContext) {
            this._dbContext = new Sequelize({
                database: connectionString.database,
                username: connectionString.username,
                password: connectionString.password,
                host: connectionString.host,
                dialect: connectionString.dialect,
                port: 5432,
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false
                    }
                }
            })
        }
        return this._dbContext
    }

    public static authenticate = async (): Promise<boolean> => {
        try {
            await this.getInstance().authenticate()
            console.log("Conexion: Exitosa Sequelize")
            return true
        } catch (error) {
            console.log("Conexion: Error  Sequelize:", error)
            return false
        }
    }

    public static getSequelize = (): Sequelize => this.getInstance()
}


export {
    SequelizeDbContext,
}