import { NumeroConta } from "../../src/model/NumeroConta";

describe("Número da conta", () => {

    test("número da conta com seis dígitos", async () => {
        const numeroConta: NumeroConta = new NumeroConta("123456");
        expect(numeroConta.numero).toBe("123456");
        expect(numeroConta.numero.length).toBe(6);
    });

    test("número da conta com quatro dígitos", async () => {
        expect(() => { new NumeroConta("1234"); }).toThrow("número da conta inválido");
    });
    
    test("número da conta com sete dígitos", async () => {
        expect(() => { new NumeroConta("1234567S"); }).toThrow("número da conta inválido");
    });

    test("número da conta com valor que não seja dígito", async () => {
        expect(() => { new NumeroConta("abc456"); }).toThrow("número da conta inválido");
    });

});