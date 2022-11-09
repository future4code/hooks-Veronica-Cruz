import { UserBusiness } from "../business/UserBusiness";
import {Request, Response} from 'express'
import { userInputDTO, loginInputDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";

export class UserController{
     async signupController (req: Request, res: Response) {
        try {
            const{name, email, password} = req.body

            const user: userInputDTO = {
                name,
                email,
                password
            }
            const userBusiness = new UserBusiness()
           const token = await userBusiness.signupBusiness(user)

            res.status(200).send({message:"User created!JWT generated token:",token})

        } catch (error: any) {
            res.status(400).send(error.message);
        } 
    }
    async loginController (req: Request, res: Response) {
        try {
            const{email, password} = req.body

            const user: loginInputDTO = {
                email,
                password
            }
            const userBusiness = new UserBusiness()
           const token = await userBusiness.loginBusiness(user)

            res.status(200).send({message:"User logged!JWT generated token:",token})

        } catch (error: any) {
            res.status(400).send(error.message);
        } 
    }
    async userLogged(req: Request, res: Response){
        try {
            const authorization = req.headers.authorization as string
            const authenticator = new Authenticator()
            const getData = authenticator.getTokenData(authorization)

            const userBusiness = new UserBusiness()
            const result = await userBusiness.userLoggedBusiness(getData.id)
          
            res.status(200).send(result)

        } catch (error:any) {
            res.status(404).send("User not found!")
        }
     
    }
    async getUsersController(req: Request, res: Response){
        try {
            const userBusiness = new UserBusiness()
            const result = await userBusiness.getUserBusiness()
            
            res.status(200).send(result)
        } catch (error:any) {
            res.status(404).send("User not found!")
        }
     
    }
}