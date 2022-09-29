import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {name, price} = req.body
        const id = Math.random().toString()

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const prod = new Product(
            Date.now().toString(),
            name, 
            price
        )

            await connection(TABLE_PRODUCTS)
            .insert({
                id: prod.getIdProduct(),
                name: prod.getNameProduct(),
                price: prod.getPriceProduct()
                
            })
                
        res.status(201).send({ message: "Produto criado", product: prod })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}