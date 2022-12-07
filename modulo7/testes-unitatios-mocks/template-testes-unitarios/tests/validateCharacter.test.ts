import { validateCharacter, Character } from "../src"

describe("testes validateCharacter", () => {
    test("teste 1 -nome vazio", () => {
        const character: Character = {
            name: "",
            life: 1500,
            defense: 1000,
            strength: 2000
        }
        const result = validateCharacter(character)
        expect(result).toEqual({
            name: "Mario",
            life: 1500,
            defense: 1000,
            strength: 2000
        })
        expect(result).toBe(false)
    })


        test("teste 2 - vida zero", () => {
            const character: Character = {
                name: "Mario",
                life: 0,
                defense: 1000,
                strength: 2000
            }
            const result = validateCharacter(character)
            expect(result).toEqual({
                name: "Mario",
                life: 1500,
                defense: 1000,
                strength: 2000
            })
            expect(result).toBe(false)
        })

        test("teste 3 - força zero", () => {
            const character: Character = {
                name: "Mario",
                life: 1500,
                defense: 1000,
                strength: 0
            }
            const result = validateCharacter(character)
            expect(result).toEqual({
                name: "Mario",
                life: 1500,
                defense: 1000,
                strength: 2000
            })
            expect(result).toBe(false)
        })

        test("teste 4 - defesa zero", () => {
            const character: Character = {
                name: "Mario",
                life: 1500,
                defense: 0,
                strength: 2000
            }
            const result = validateCharacter(character)
            expect(result).toEqual({
                name: "Mario",
                life: 1500,
                defense: 1000,
                strength: 2000
            })
            expect(result).toBe(false)
        })
        test("teste 5 - valor negativo", () => {
            const character: Character = {
                name: "Mario",
                life: 1500,
                defense: -100,
                strength: 2000
            }
            const result = validateCharacter(character)
            expect(result).toEqual({
                name: "Mario",
                life: 1500,
                defense: 1000,
                strength: 2000
            })
            expect(result).toBe(false)
        })
        test("teste 6 - sucesso!", () => {
            const character: Character = {
                name: "Mario",
                life: 1500,
                defense: 1000,
                strength: 2000
            }
            const result = validateCharacter(character)
            expect(result).toEqual({
                name: "Mario",
                life: 1500,
                defense: 1000,
                strength: 2000
            })
            expect(result).toBe(true)
        })
    })

