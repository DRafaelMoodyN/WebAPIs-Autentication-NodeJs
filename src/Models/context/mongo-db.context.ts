import mongoose from "mongoose";

export class MongoDbContext {

    private constructor() {
        throw new Error("Esta clase no debe ser intanciada")
    }

    public static async connect(dbUrl: string) {
        try {
            await mongoose.connect(dbUrl)
            console.log("Moogose connection correcto")
        } catch (error) {
            console.log("Moogose connection error", error)
        }
    }
}