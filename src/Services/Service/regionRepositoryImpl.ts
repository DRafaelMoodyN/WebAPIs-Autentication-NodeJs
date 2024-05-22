import { RegionDataSource, RegionRepository } from "../../Repositories";
import { CountryEntitie, DepartamentEntitie } from "../../Repositories/Entities/region-entitie";

export class RegionRepositoryImpl implements RegionRepository {

    constructor(private readonly _repository: RegionDataSource) { }

    getCountry(): Promise<CountryEntitie[]> {
        return this._repository.getCountry()
        
    }
    getDepartament(countryId: number): Promise<DepartamentEntitie[]> {
        return this._repository.getDepartament(countryId)
    }
}