import { CountryEntitie, DepartamentEntitie } from "../Entities/region-entitie";

export abstract class RegionRepository {

    abstract getCountry(): Promise<CountryEntitie[]>
    abstract getDepartament(countryId: number): Promise<DepartamentEntitie[]>
}