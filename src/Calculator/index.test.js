const calculator = require("./index");

describe("Soma teste", () => {
  test("Soma precisa teste", () => {
    expect(calculator.soma(100, 50)).toBe(5000);
  });
});
