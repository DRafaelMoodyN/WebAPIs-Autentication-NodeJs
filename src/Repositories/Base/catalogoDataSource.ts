import { TipoClienteEntitie } from "../Entities/catalogo-entitie";

export abstract class CatalogoDataSource {

    abstract getTipoClient(): Promise<TipoClienteEntitie[]>
}