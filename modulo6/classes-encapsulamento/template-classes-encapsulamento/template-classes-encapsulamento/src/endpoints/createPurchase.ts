import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = Date.now().toString()
        const {userId, productId, quantity} = req.body
       
        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await connection(TABLE_USERS)
        .select()
        .where({ id: userId })

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await connection(TABLE_PRODUCTS)
        .select()
        .where({ id: productId })

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        const product = new Product  (
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )
        
        const totalPrice = product.price * quantity

        const newPurchase = new Purchase (
            id,
            userId,
            productId,
            quantity,
            totalPrice
        )

        await connection(TABLE_PURCHASES).insert({
            newPurchase
        })

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}