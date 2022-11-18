import { validateEmptyProperties } from "../src/validateEmptyProperties"

describe.skip("Testes na validateEmptyProperties", ()=>{


    test("Teste com string vazia", ()=>{
        const input = { name: "" }
        const output = validateEmptyProperties(input)
        // output = { isValid: false , errors: [{key: "name", value: ""}]}

        expect(output).toEqual({ isValid: false , errors: [{key: "name", value: ""}]})
        expect(output.isValid).toBe(false)
        expect(output.errors).toContainEqual({key: "name", value: ""})
    })

    test("Teste com número 0", ()=>{
        const input = { age: 0 }
        const output = validateEmptyProperties(input)
        // output = { isValid: false , errors: [{key: "age", value: 0}]}

        expect(output.isValid).toBe(false)
        expect(output.errors).toContainEqual({key: "age", value: 0})
    })
    
    test("Teste com undefined", ()=>{
        const input = { city: undefined }
        const output = validateEmptyProperties(input)
      
        expect(output.isValid).toBe(false)
        expect(output.errors).toContainEqual({key: "city", value: undefined})
    })
   
    test("Teste com null", ()=>{
        const input = { country: null }
        const output = validateEmptyProperties(input)
      
        expect(output.isValid).toBe(false)
        expect(output.errors).toContainEqual({key: "country", value: null})
    })

    test("Teste com 4 campos vazios", ()=>{
        const input = { 
            name: "",
            age: 0,
            city: undefined,
            country: null 
        }
        const output = validateEmptyProperties(input)
      
        expect(output.isValid).toBe(false)
        expect(output.errors.length).toBe(4)
    })

    test("Teste com caso de sucesso", ()=>{
        const input = { 
            name: "Rodrigo",
        }
        const output = validateEmptyProperties(input)
      
        expect(output.isValid).toBe(true)
        expect(output.errors.length).toBe(0)
    })
})