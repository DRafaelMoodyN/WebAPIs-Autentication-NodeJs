import mongoose from "mongoose"
import { Schema } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, "El nombre es requerido"],
    },
    email: {
        type: String,
        require: [true, "El email es requerido"],
        unique: [true, "El email no se puede repetir"]
    },
    password: {
        type: String,
        require: [true, "El password es requerido"],
    },
    img: {
        type: [String],
        default: [""]
    },
    roles: {
        type: [String],
        default: ["USER"],
        enum: ["USER", "ADMIN"]
    }
})

export const UserModel = mongoose.model("User", userSchema)