import { NumeroConta } from "./NumeroConta";

export class Conta {

  private _numeroConta: NumeroConta;
  private _saldo: number;

  public constructor(numero: string, saldo: number) {
    this._numeroConta = new NumeroConta(numero);
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

  public get numero(): string {
    return this._numeroConta.numero;
  }

  private validarValorMaiorQueZero(valor: number): void {
    if (valor <= 0)
      throw new Error("Valor não pode ser igual ou maior que zero");
  }
}  