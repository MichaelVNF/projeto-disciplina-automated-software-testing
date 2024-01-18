import { Conta } from "../../src/model/Conta";

describe("Conta", () => {

  //SACAR
  test("sacar com sucesso", async () => {
    const conta = criarConta();
    conta.sacar(200.0);
    expect(conta.saldo).toBe(4800.0);
  });

  test("sacar com valor zerado", async () => {
    const conta = criarConta();
    expect(() => { conta.sacar(0); }).toThrow("Valor não pode ser igual ou maior que zero");
  });

  test("sacar com valor negativo", async () => {
    const conta = criarConta();
    expect(() => { conta.sacar(-1); }).toThrow("Valor não pode ser igual ou maior que zero");
  });

  test("sacar valor acima do saldo", async () => {
    const conta = criarConta();
    expect(() => { conta.sacar(6000.0); }).toThrow("Saldo indisponível para operação");
  });
  //

  //DEPOSITAR
  test("depositar com sucesso", async () => {
    const conta = criarConta();
    conta.depositar(200.0);
    expect(conta.saldo).toBe(5200.0);
  });

  test("depositar com valor zerado", async () => {
    const conta = criarConta();
    expect(() => { conta.depositar(0); }).toThrow("Valor não pode ser igual ou maior que zero");
  });

  test("depositar com valor negativo", async () => {
    const conta = criarConta();
    expect(() => { conta.depositar(-1); }).toThrow("Valor não pode ser igual ou maior que zero");
  });
  //

});

function criarConta(): Conta {
  return new Conta("123456", 5000.0);
}