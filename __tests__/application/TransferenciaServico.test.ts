import { TransferenciaServico } from "../../src/application/TransferenciaServico";
import { TransferenciaDTO } from "../../src/application/dto/TransferenciaDTO";
import { Conta } from "../../src/model/Conta";
import { IRepositorio } from "../../src/model/contract/IRepositorio";
import { MemoriaContaRepositorio } from "../fake/MemoriaContaRepositorio";

describe("Transferencia Servico", () => {

    test("transferencia com sucesso", () => {
        //Arrange
        const repositorio: IRepositorio<string, Conta> = new MemoriaContaRepositorio();

        const contaOrigem: Conta = new Conta("123456", 1000.0);
        const contaDestino: Conta = new Conta("654321", 1000.0);

        repositorio.adicionar(contaOrigem);
        repositorio.adicionar(contaDestino);

        const transferenciaServico: TransferenciaServico = new TransferenciaServico(repositorio);
        const dto: TransferenciaDTO = new TransferenciaDTO("123456", "654321", 100.0);

        //Act
        const recibo: string = transferenciaServico.transferir(dto);

        //Assert
        expect(repositorio.buscar("123456")!.saldo).toBe(900.0);
        expect(repositorio.buscar("654321")!.saldo).toBe(1100.0);
        expect(recibo.length).toBe(6);
    });
});