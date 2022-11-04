import bcrypt from "bcrypt.js"

export class HashManager {
    public hash = async (plaintext : string) => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)
        return hash
    }
}
