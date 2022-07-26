import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
  test("retorna true pra 1600", () => {
    const resp = checaBissexto(1600);

    expect(resp).toEqual(true);
  });

  test("retorna true pra 2000", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 1996", () => {
    const res = checaBissexto(1996);

  expect(res).toEqual(true);
  });
  

  test("retorna true pra 2008", () => {
    const result = checaBissexto(2008);

    expect(result).toEqual(true);
  });


  test("retorna false pra 2007", () => {
    const response = checaBissexto(2007);

    expect(response).toEqual(false);
  });
});
