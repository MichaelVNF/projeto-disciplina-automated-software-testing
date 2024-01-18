import { NumeroConta } from "./NumeroConta";

export class Conta {

  private _numero: NumeroConta;
  private _saldo: number;

  public constructor(numero: string, saldo: number) {
    this._numero = new NumeroConta(numero);
    this._saldo = saldo;
  }

  public sacar(valor: number): void {
    this.validarValorMaiorQueZero(valor);

    if ((this._saldo - valor) < 0)
      throw new Error("Saldo indisponível para operação");

    this._saldo -= valor;
  }

  public depositar(valor: number): void {
    this.validarValorMaiorQueZero(valor);

    this._saldo += valor;
  }

  public get saldo(): number {
    return this._saldo;
  }

  private validarValorMaiorQueZero(valor: number): void {
    if (valor <= 0)
      throw new Error("Valor não pode ser igual ou maior que zero");
  }
}  