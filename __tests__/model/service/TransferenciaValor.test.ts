import { Conta } from "../../../src/model/Conta";
import { Recibo } from "../../../src/model/service/Recibo";
import { TransferenciaValor } from "../../../src/model/service/TransferenciaValor";

describe("Transferência de valor", () => {

    test("transferência de valor entre contas com sucesso", () => {
        const contaOrigem: Conta = new Conta("123456", 1000.0);
        const contaDestino: Conta = new Conta("123456", 1000.0);

        const transferenciaValor: TransferenciaValor = new TransferenciaValor();
        const recibo: Recibo = transferenciaValor.transferir(contaOrigem, contaDestino, 100.0);

        expect(contaOrigem.saldo).toBe(900.0);
        expect(contaDestino.saldo).toBe(1100.0);
        expect(recibo.codigo.length).toBe(6);
    });
});