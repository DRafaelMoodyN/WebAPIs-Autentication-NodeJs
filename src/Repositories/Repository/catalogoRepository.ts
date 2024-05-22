import { TipoClienteEntitie } from "../Entities/catalogo-entitie";

export abstract class CatalogoRepository {
    abstract getTipoClient(): Promise<TipoClienteEntitie[]>
}