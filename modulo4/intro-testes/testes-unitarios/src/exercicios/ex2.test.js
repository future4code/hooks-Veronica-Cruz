import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });
  it("retorna true para 'ama'", () => {
    const ehPalindromo = checaPalindromo("ama");
    expect(ehPalindromo).toEqual(true);
  });
  it("retorna false para 'veronica'", () => {
    const ehPalindromo = checaPalindromo("veronica");
    expect(ehPalindromo).toEqual(false);
  });
});
