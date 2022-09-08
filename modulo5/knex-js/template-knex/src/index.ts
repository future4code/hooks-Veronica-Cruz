import express from "express";
import cors from "cors";
import{Request, Response} from 'express';
import connection from "./database/connection";
import { newUser } from "./database/types";
import { networkInterfaces } from "os";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/searchUsers', async(req: Request, res: Response) => {
    let statusCode = 400
  try {
      const buscar = req.query.buscar

      if(buscar) {
        const resultado = await connection.raw (`
          SELECT id, nome, email FROM Funcionarios_Lista
          WHERE nome = "${buscar}"
        `)
        res.status(200).send(resultado[0])
      }
      if(!buscar){
      const users = await connection.raw(`
          SELECT * FROM Funcionarios_Lista;
      `)
      res.status(200).send(users[0])
      }
   
      
  } catch (error) {
    res.status(statusCode).send(error.message)
  }
})

app.post('/addUser', async(req: Request, res: Response) =>{
  let statusCode = 400
  try {
      const {nome, email}= req.body

      if(!nome || !email){
        throw new Error ("Preencha nome e email para criar um novo usuário!")
      }

      if(typeof "nome" !== "string") {                    //406 Not Acceptable
          statusCode = 406
        throw new Error ("O nome deve ser uma string")
      }

      if(typeof "email" !== "string") {
        statusCode = 406
        throw new Error ("O email deve ser uma string")
      }

      if(!email.includes("@")){
        statusCode = 406
        throw new Error ("Email deve possuir o caractere @")
      }

      if(nome.length < 4){
        statusCode = 406
        throw new Error("O nome deve ter no mínimo 4 letras")
      }

      const addUser: newUser = {
        id: Number(Date.now()) ,
        nome,
        email
      } 
      await connection.raw(`
          INSERT INTO Funcionarios_Lista
          VALUES (${addUser.id}, "${addUser.nome}", "${addUser.email}");
      `)
    res.status(200).send("Usuário adicionado com sucesso!")
      
  } catch (error) {
    res.status(statusCode).send(error.message)
  }
})

app.put('/editUser/:id', async (req: Request, res: Response) => {
  let statusCode = 400
  try {
      const email = req.body.email
      const id = req.params.id

      if(!id || !email){
        throw new Error ("Preencha id do usuário que quer editar o novo email!")
      }

      if(typeof "email" !== "string") {
        statusCode = 406
        throw new Error ("O email deve ser uma string")
      }

      if(!email.includes("@")){
        statusCode = 406
        throw new Error ("Email deve possuir o caractere @")
      }
      
      const [user] = await connection.raw(`
        SELECT * FROM Funcionarios_Lista
        WHERE id = ${id}
      `)

      const foundUser = user[0]
        if(!foundUser) {
          statusCode = 404
          throw new Error("Esse usuário não existe!");
          
        }

      if(id && email) {
        await connection.raw (`
        UPDATE Funcionarios_Lista SET email = "${email}"
          WHERE id = ${id};
        `)
        res.status(200).send("Email editado com sucesso!")
      }
              
  } catch (error) {
    res.status(statusCode).send(error.message)
  }
})

app.delete('/deleteUser/:id', async(req: Request, res: Response) => {
  let statusCode = 400
  try {
      const id = Number(req.params.id)

      const [user] = await connection.raw(`
        SELECT * FROM Funcionarios_Lista
        WHERE id = ${id}
      `)

      const foundUser = user[0]
        if(!foundUser) {
          statusCode = 404
          throw new Error("Esse usuário não existe!");
          
        }

      await connection.raw(`
          DELETE FROM Funcionarios_Lista
          WHERE id = ${id};
      `)
    res.status(200).send("Usuário deletado com sucesso!")
      
  } catch (error) {
    res.status(statusCode).send(error.message)
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});