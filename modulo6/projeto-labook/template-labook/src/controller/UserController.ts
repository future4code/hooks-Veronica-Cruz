import {Request, Response} from "express"
import { generateId } from "../services/generateId"
import {UserDatabase} from "../data/UserDatabase"

export class UserController{
  async createUserController (req: Request, res: Response) {
        try {
           let message = "Success!"
           const { name, email, password } = req.body
     
           if (!name || !email || !password) {
              res.statusCode = 406
              message = '"name", "email" and "password" must be provided'
              throw new Error(message)
           }
     
           const id: string = generateId()
           
           const userDatabase = new UserDatabase()

           await userDatabase.createUserDatabase('labook_users')
              .insert({
                 id,
                 name,
                 email,
                 password
              })
     
           res.status(201).send({ message })
     
        } catch (error:any) {
           res.statusCode = 400
           let message = error.sqlMessage || error.message
           res.send({ message })
        }
     })
}

