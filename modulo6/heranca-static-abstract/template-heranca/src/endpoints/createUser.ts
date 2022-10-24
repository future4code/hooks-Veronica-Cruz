import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

          const user = new User(
            Date.now().toString(),
            email,
            password
        )

        // await connection(TABLE_USERS).insert({
        //     id: user.getId(),
        //     email: user.getEmail(),
        //     password: user.getPassword()
        // })

        const userDatabase = new UserDatabase() //chama a variável criada no getUsers
        await userDatabase.createUser(user) //passa a função com o argumento igual no UserDatabase

        res.status(201).send({ message: "Usuário criado", user: user })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}