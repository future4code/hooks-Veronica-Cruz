import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_PRODUCTS).select()
        const userDatabase = new UserDatabase()
        const result = await userDatabase.getAllProducts()
        res.status(200).send({ products: result })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}