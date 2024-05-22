import 'dotenv/config'
import { get } from "env-var"

export const envs = {
    PORT: 8090,
    JWT_SECRET: "SECRET",
    MONGO_CONNECTION: "mongodb+srv://testing:CmPA23kYuterufbh@cluster0.ikorbno.mongodb.net/Authentication?retryWrites=true&w=majority"
}
