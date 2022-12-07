import { validateCharacter, Character } from "../src"

describe("teste validateCharacter", () => {
    it("nome vazio", () => {
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
    describe("teste validateCharacter", () => {
        it("vida zero", () => {
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
    })

})