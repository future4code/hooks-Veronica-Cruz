import { Request, Response } from 'express';
import { userBusiness } from '../business/userBusiness';


export class userController{
    //ENDPOINT CRIAR USUARIO
    public createUser = async (req: Request, res: Response) => {

        try{
            const {name, email, password} = req.body

            const input = {
                name,
                email,
                password
            }
          const UserBusiness = new userBusiness()

          await UserBusiness.createUser(input)
                       
         res.status(200).send('Usuário criado!')
            
        }catch(error:any){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }
    //ENDPOINT PEGAR TODOS USUÁRIOS
    public getAllUsers = async (req: Request, res: Response) => {
        try {
            const UserBusiness = new userBusiness()

            const result = await UserBusiness.getAllUsers()

            res.send(result).status(200)

        } catch (error: any) {
            throw new Error(error.message);
            
        }
}
    //ENDPOINT DELETAR USUÁRIO

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            

           await new userBusiness().delUser(id);

            res.status(200).send({ message: "Usuário apagado com sucesso" });
        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}