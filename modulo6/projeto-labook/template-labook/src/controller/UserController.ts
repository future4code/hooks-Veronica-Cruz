import {Request, Response} from "express"
import { generateId } from "../services/generateId"
import { UserBusiness } from "../business/UserBusiness"
import { userInputDTO } from "../models/User"

export class UserController{
  async createController (req: Request, res: Response) {
        try {

         let message = "Success!"
           const { name, email, password } = req.body
     
           const id: string = generateId()
           
           const userBusiness = new UserBusiness()
           const user: userInputDTO={
            name,
            email,
            password
           }

           await userBusiness.createBusiness(user)
              
     
           res.status(201).send({ message })
     
        } catch (error:any) {
           res.statusCode = 400
           let message = error.sqlMessage || error.message
           res.send({ message })
        }
     }
}

