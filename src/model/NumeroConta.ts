export class NumeroConta {

    private _numero: string;

    public constructor(numero: string) {
        if (!this.verificarNumeroContaComSeisDigitos(numero))
            throw new Error("Número da conta inválido");

        this._numero = numero;
    }

    public get numero() {
        return this._numero;
    }

    private verificarNumeroContaComSeisDigitos(numero: string): boolean {
        const regExp: RegExp = /^\d{6}$/;
        return regExp.test(numero);
    }
}