import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = Date.now().toString()
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const prod = new Product(
            id,
            name,
            price
        )

        await connection(TABLE_PRODUCTS).insert({
                prod
            })

        res.status(201).send({ message: "Produto criado", product: prod })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}