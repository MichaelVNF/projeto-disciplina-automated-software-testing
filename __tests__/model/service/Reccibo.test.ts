import { Recibo } from "../../../src/model/service/Recibo";

describe("Recibo", () => {
  test("criar com sucesso", async () => {
    const recibo: Recibo = new Recibo();
    expect(recibo.codigo.length).toBe(6);
  });
});