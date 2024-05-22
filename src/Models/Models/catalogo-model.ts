import { DataTypes, Model } from "sequelize"
import { SequelizeDbContext } from "../context"

const db = SequelizeDbContext.getSequelize()

const TipoClientModel = db.define("tipocliente", {
    clienteId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(150),
        unique: true,
        allowNull: false
    }
}, { modelName: "tipocliente", timestamps: false })


export {
    TipoClientModel,
}