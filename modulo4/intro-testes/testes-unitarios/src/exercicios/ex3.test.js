import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("checar itens duplicados", ()=>{
        const array = [5,60,23,80,23]

        const result = checaItensDuplicados(array)

        expect(result).toEqual([5,6,23,80])
    })
});
