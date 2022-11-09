import { generateId } from "../services/generateId";
import { UserDatabase } from "../data/UserDatabase";
import { userInsert, User, userInputDTO } from "../models/User";
import { InvalidName, InvalidEmail,InvalidPassword } from "../error/CustomError";


export class UserBusiness{
    async createBusiness(input: userInputDTO): Promise<void> {

         const {name, email, password} = input

        if (!name) {
       
            throw new InvalidName()
         }

         if (!email||!email.includes('@')||!email.includes('.com')) {
       
            throw new InvalidEmail()
         }

         if (!password) {
       
            throw new InvalidPassword()
         }

        const id = generateId()

        const userDatabase = new UserDatabase()

        const user: userInsert ={
            id, 
            name, 
            email, 
            password
        }

        await userDatabase.createUserDatabase(user)
    }
}