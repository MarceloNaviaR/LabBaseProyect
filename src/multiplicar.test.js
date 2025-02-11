import multiplicar from "./multiplicar.js";

describe("Multiplicar", () => {
  it("debería multiplicar dos números", () => {
    expect(multiplicar(3, 2)).toEqual(6);
    expect(multiplicar(-1, 5)).toEqual(-5);
    expect(multiplicar(0, 10)).toEqual(0);
  });
});
