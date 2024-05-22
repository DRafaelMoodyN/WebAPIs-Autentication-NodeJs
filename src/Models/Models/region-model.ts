import { DataTypes, Model } from "sequelize"
import { SequelizeDbContext } from "../context"

const db = SequelizeDbContext.getSequelize()

const CountryModel = db.define("country", {
    countryId: {
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
}, { modelName: "country", timestamps: false })


const DepartamentModel = db.define("departament", {
    departamentId: {
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

}, { modelName: "departament", timestamps: false })


CountryModel.hasMany(DepartamentModel, {
    foreignKey: {
        name: "countryId",
    },
});

DepartamentModel.belongsTo(CountryModel, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
    foreignKey: {
        name: "countryId",
        allowNull: false,
    },
});

export {
    CountryModel,
    DepartamentModel
}