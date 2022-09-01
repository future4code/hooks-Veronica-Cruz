// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { users, User, UserType } from "./data"


const app: Express = express();

app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors

//EXERCICIO 1

app.get("/allUsers", (req, res) => {
    let statusCode = 400
    try {
        res.send(users)

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }

})

// A) o método get para buscar todos os usuários.
// B) "/allUsers"     

//===================================================================================

//EXERCICIO 2
app.get("/typeUser/:id", (req, res) => {

    let statusCode = 400
    try {

        const typeUser = Number(req.params.id)

        const user: User | undefined = users.find((user) => {
            return user.id === typeUser
        })

        if (!user) {
            statusCode = 404
            res.send("Precisa passar se o usuário é admin ou normal")
        }
        if (isNaN(typeUser)) {
            statusCode = 422
            throw new Error("Insira um número para o id")
        }

        res.send(user)

    } catch (error) {

    }
})

// A) Passei o parametro por id, pois nesse caso é a propriedade type específica para 
// encontrar cada usuário.

// B) Nesse caso foi feito a condicional isNaN para verificar se o id passado é realmente
// um number.


//===================================================================================

//EXERCICIO 3
app.get("/nameUser", (req, res) => {
    let statusCode = 400
    try {
        //localiza o user
        const name: string = req.query.name as string
        const user: User | undefined = users.find((user) =>
            user.name === name)

        //se o name não for passado por parametro query
        //ou se não encontrar o name no array users
        if (!user) {
            statusCode = 404
            throw new Error("User not found")
        }

        res.send(user) //user retornado pelo find acima

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

// A) Nesse caso utilizei o query parameters para acessar a propriedade específica.
// B)   if (!user) {
    // statusCode = 404
    // throw new Error("User not found")
// }
//===================================================================================

//EXERCICIO 4

app.post("/addUser", (req, res) => {
    let statusCode = 400

  try {
    const {id, name, email, type, age} = req.body

    const newUser: User = {
        id,
        name,
        email,
        type,
        age
    }

    if (!id || !name || !email || !type || !age) {
        statusCode = 404
        throw new Error ("User not found")
    }
    users.push(newUser)
    res.send("Usuário Criado!")

  } catch (error:any){
    res.status(statusCode).send(error.message)
  }
})

// A) 
app.put("/addUser", (req, res) => {
    let statusCode = 400

    try {
      const {id, name, email, type, age} = req.body
  
      const newUser: User = {
          id,
          name,
          email,
          type,
          age
      }
  
      if (!id || !name || !email || !type || !age) {
          statusCode = 404
          throw new Error ("User not found")
      }
      users.push(newUser)
      res.send("Usuário Criado!")
  
    } catch (error:any){
      res.status(statusCode).send(error.message)
    }
  })

  // A) O usuário foi criado da mesma forma.
  // B) Não é apropriado para isso pois o PUT é para atualizar/editar o dado e não para criar.
//===================================================================================




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});