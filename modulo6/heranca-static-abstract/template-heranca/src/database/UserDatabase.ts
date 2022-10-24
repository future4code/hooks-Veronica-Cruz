// UserDatabase é filha de BaseDatabase
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_PURCHASES, TABLE_USERS, TABLE_PRODUCTS } from "./tableNames";
import {User} from "../models/User"

//deve possuir os métodos(funções) qetAllUsers, createUser e getUserById 
// criar atributo estático que irá guardar o nome da tabela referente à usuários
export class UserDatabase extends BaseDatabase {
//crio as funções para chamar as queries dentro da classe
   public async getAllUsers(){
        const result = await BaseDatabase.connection(TABLE_USERS).select()
        return result
   }

   public async createUser(user : User){ //chamo a variável com o type criado em models
     await BaseDatabase.connection(TABLE_USERS).insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })
   }

   public async getUserById(id: string){
     const result = await BaseDatabase.connection(TABLE_USERS).select().where({id: id })
        return result
   }

   public async getAllPurchases(userId: string){
    const result = await BaseDatabase.connection(TABLE_PURCHASES).select().where({userId})
    return result
   }

   public async getAllProducts(){
    const result = await BaseDatabase.connection(TABLE_PRODUCTS).select()
    return result
   }
    
}