import { performPurchase, User } from "../src"

describe("", ()=> {
    it("teste saldo maior do que o valor de compra", ()=>{
        const user: User = {
            name: "Verônica",
            balance: 10000
        }
       

        const result = performPurchase(user, 1240)
        expect(result).toEqual({
            name: "Verônica",
            balance: 8760
        })
    })
    it("teste saldo igual ao valor de compra ", ()=>{
        const user: User = {
            name: "Verônica",
            balance: 10000
        }
       

        const result = performPurchase(user, 10000)
        expect(result).toEqual({
            name: "Verônica",
            balance: 0
        })
    })
    it("teste saldo menor do que o  valor de compra ", ()=>{
        const user: User = {
            name: "Verônica",
            balance: 1000
        }
       
        const result = performPurchase(user, 1240)
        expect(result).not.toBeDefined()
        
    })
})


