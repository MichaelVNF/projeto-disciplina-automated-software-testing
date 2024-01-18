import { Conta } from "../model/Conta";
import { IRepositorio } from "../model/contract/IRepositorio";
import { Recibo } from "../model/service/Recibo";
import { TransferenciaValor } from "../model/service/TransferenciaValor";
import { TransferenciaDTO } from "./dto/TransferenciaDTO";

export class TransferenciaServico {

    private _repositorio: IRepositorio<string, Conta>;

    public constructor(repositorio: IRepositorio<string, Conta>){
        this._repositorio = repositorio;
    }

    public transferir(dto: TransferenciaDTO): string {
        const contaOrigem = this._repositorio.buscar(dto.contaOrigem)!;
        const contaDestino = this._repositorio.buscar(dto.contaDestino)!;

        const transferencia: TransferenciaValor = new TransferenciaValor();
        const recibo: Recibo = transferencia.transferir(contaOrigem, contaDestino, dto.valor);

        this._repositorio.adicionar(contaOrigem);
        this._repositorio.adicionar(contaDestino);

        return recibo.codigo;
    }
}