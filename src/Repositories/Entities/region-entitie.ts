export class CountryEntitie {
    countryId:number;
    countryName:string

    constructor(countryId: number, countryName: string) {
        this.countryId=countryId;
        this.countryName=countryName
    }
}

export class DepartamentEntitie {
    departamentId:number;
    name:string;

    constructor(departamentId: number, name: string) {
        this.departamentId = departamentId;
        this.name = name;
    }
}