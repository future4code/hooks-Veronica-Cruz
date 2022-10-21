import { generateId } from "../services/generateId";
import { UserDatabase } from "../data/UserDatabase";
import { user, User } from "../models/User";

export class UserBusiness{
    async createBusiness(input): Promise<void> {

        const id = generateId()

        const {name, email, password} = input

        const userDatabase = new UserDatabase()

        const user: User ={
            id, 
            name, 
            email, 
            password
        }

        await userDatabase.createUserDatabase(user)
    }
}