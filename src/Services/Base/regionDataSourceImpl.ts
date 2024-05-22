import { CustomError } from "../../Configurations";
import { RegionDataSource } from "../../Repositories";
import { CountryModel, DepartamentModel } from "../../Models/Models"
import { CountryEntitie, DepartamentEntitie } from "../../Repositories/Entities/region-entitie";

export class RegionDataSourceImpl implements RegionDataSource {
    async getCountry(): Promise<CountryEntitie[]> {
        try {
            const region = await CountryModel.findAll()
            const result = region.map((x) => {
                return new CountryEntitie(x.dataValues.countryId, x.dataValues.name)
            });
            return result;
        } catch (error) {
            if (error instanceof CustomError) throw error
            throw CustomError.internalServer()
        }
    }
   async getDepartament(countryId: number): Promise<DepartamentEntitie[]> {
        try {
            const departament = await DepartamentModel.findAll({
                where:{
                    countryId:countryId
                }
            })

            const result = departament.map((x) => {
                return new DepartamentEntitie(x.dataValues.departamentId, x.dataValues.name)
            });
            return result;
        } catch (error) {
            if (error instanceof CustomError) throw error
            throw CustomError.internalServer()
        }
    }
}