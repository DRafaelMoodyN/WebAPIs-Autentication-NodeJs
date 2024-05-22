import { CustomError } from "../../Configurations";
import { CatalogoDataSource } from "../../Repositories";
import { TipoClientModel } from "../../Models/Models"
import { TipoClienteEntitie } from "../../Repositories/Entities/catalogo-entitie";

export class CatalogoDataSourceImpl implements CatalogoDataSource {
    async getTipoClient(): Promise<TipoClienteEntitie[]> {
        try {
            const tipoCliente = await TipoClientModel.findAll()
            const result = tipoCliente.map((x) => {
                return new TipoClienteEntitie(x.dataValues.clienteId, x.dataValues.name)
            });
            return result;
        } catch (error) {
            if (error instanceof CustomError) throw error
            throw CustomError.internalServer()
        }
    }
}