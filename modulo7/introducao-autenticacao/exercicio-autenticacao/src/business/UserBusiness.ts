import { UserDatabase } from "../data/UserDatabase";
import { InvalidEmail, InvalidName,InvalidPassword, UserNotFound } from "../error/CustomError";
import { user, userInputDTO, loginInputDTO} from "../model/User";
import { generateId } from "../services/IdGenerator";
import {Authenticator} from   "../services/Authenticator"


export class UserBusiness {
    public async signupBusiness(input: userInputDTO){
        try {
            const {name, email, password} = input 

            if(!name || name.length < 4){
                throw new InvalidName()
            }
    
            if(!email || !email.includes("@")){
                throw new InvalidEmail()
            }
    
            if(!password || password.length < 6){
                throw new InvalidPassword()
            }
    
            const id = generateId()
            const authenticator = new Authenticator()
    
            const user: user = {
                id,
                name,
                email, 
                password
            }
            const userDatabase = new UserDatabase()
            await userDatabase.createUser(user)
            const token = authenticator.generateToken({id})
            return token
            
        } catch (error:any) {
            throw new Error(error.message);
            
        }

    
    }

    public loginBusiness = async (input: loginInputDTO) => {

        const {email, password} = input 

        if(!email || !email.includes("@")){
            throw new InvalidEmail()
        }

        if(!password || password.length < 6){
            throw new InvalidPassword()
        }

        const authenticator = new Authenticator()

        const userDatabase = new UserDatabase()

        const user = await userDatabase.findUserByEmail(email);

        if(!user){
            throw new UserNotFound()
        }
        if(user.password !== password){
            throw new InvalidPassword()
        }
        const token = authenticator.generateToken({id: user.id})
        return token
    }
    public async userLoggedBusiness(token: string){
        const userDatabase = new UserDatabase()
        const result = await userDatabase.userLogged(token)
        return result
    }

    public async getUserBusiness(){
        const userDatabase = new UserDatabase()
        const result = await userDatabase.getUsers()
        return result
    }
}