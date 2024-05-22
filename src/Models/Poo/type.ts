import { EDialect } from "./enum"

type TConnectionString = {
    database: string,
    username: string,
    password: string,
    host: string,
    dialect: EDialect,
}

export {
    TConnectionString
}

