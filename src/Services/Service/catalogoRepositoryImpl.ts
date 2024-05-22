import { CatalogoDataSource, CatalogoRepository } from "../../Repositories";
import { TipoClienteEntitie } from "../../Repositories/Entities/catalogo-entitie";

export class CatalogoRepositoryImpl implements CatalogoRepository {

    constructor(private readonly _repository: CatalogoDataSource) { }
    async getTipoClient(): Promise<TipoClienteEntitie[]> {
        return await this._repository.getTipoClient();
    }
}