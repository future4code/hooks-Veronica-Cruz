import {UserDatabase} from '../data/UserDatabase'

export class userBusiness{
    //CRIAR USUÁRIO
    public createUser = async (input:any) => {
       
        try {
        
            const {name, email, password} = input   
            
            if(!name || !email || !password){
                throw new Error("Preencha todos os campos para criar um novo usuário!");
            }

            const id = Date.now().toString();

            const userDatabase = new UserDatabase()

            await userDatabase.insertUser({
                id, 
                name,
                email,
                password
            })
         
        } catch (error:any) {
           throw new Error("Erro!");
           
        }
      }
      //PEGAR TODOS USUÁRIOS
      public getAllUsers = async () => {
        try {

            const userDatabase = new UserDatabase()
            const result = await userDatabase.getUsers()

            if(!result){
                throw new Error("Não existem usuários!");
                
            }
            return result

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    //DELETAR USUÁRIO
    public delUser = async (id:string)=> {

        
        if(!id){
            throw new Error("Insira um id!")
        }

     await new UserDatabase().deleteUser(id);
}
    }

