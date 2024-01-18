import { Conta } from "../../src/model/Conta";
import { IRepositorio } from "../../src/model/contract/IRepositorio";

export class MemoriaContaRepositorio implements IRepositorio<string, Conta> {

    private _dicionario: Map<string, Conta>;

    public constructor() {
        this._dicionario = new Map<string, Conta>();
    }

    public buscar(numero: string): Conta | undefined {
        return this._dicionario.get(numero);
    }

    public adicionar(conta: Conta): void {
        this._dicionario.set(conta.numero, conta);
    }

}