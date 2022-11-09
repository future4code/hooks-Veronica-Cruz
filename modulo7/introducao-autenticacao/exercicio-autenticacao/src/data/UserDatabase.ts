import { BaseDatabase } from "./BaseDatabase";
import { loginInputDTO, user} from "../model/User";

export class UserDatabase extends BaseDatabase{
    private static TABLE_NAME = 'Auth_Users'

    public async createUser (user:user) {
        await UserDatabase.connection
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        }).into(UserDatabase.TABLE_NAME)
    }
    public async findUserByEmail (email: string) {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select()
        .where({email})

        return result[0]
       
    }
    public async userLogged(id: string){
        const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select().where({id})
        return result
    }

    public async getUsers(){
        const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select()
        return result
    }
}