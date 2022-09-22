import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";
import { Users, Task } from "./types";
import { v4 } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());

//CRIAR USUÁRIO
app.post('/user', async(req: Request, res: Response) => {
  let statusCode = 400

  try {

    const {username, nickname, email} = req.body

    if(!username || !nickname || !email){
      throw new Error ("Passe o username, nickname e email para criar um novo usuário!")
    }
    
    const addUser: Users = {
      id:Number(Date.now()),
      username,
      nickname,
      email
    }

     await connection.raw (`
      INSERT INTO Users(id, username, nickname, email)
      VALUES(${addUser.id},"${addUser.username}","${addUser.nickname}","${addUser.email}")
    `)
    res.send("Usuário criado com sucesso!")
  } catch (error) {
      res.status(statusCode).send(error.message)
  }
})

//ENCONTRAR USUÁRIO PELO ID
app.get('/user/:id', async (req:Request, res: Response) => {
      let statusCode = 400

    try {
      const id = Number(req.params.id)

      if(!id) {
        throw new Error ("Informe o id para encontrar o usuário!")
      }

      // if(id !== id) {
      //   throw new Error("Usuário não existente!")  //NAO FUNCIONOU
      // }

      if(id) {
        const result = await connection.raw(`
        SELECT id, username, nickname, email FROM Users
        WHERE id = ${id};
        `)
       res.send(result[0])
      }
     

    } catch (error) {
      res.status(statusCode).send(error.message)
    }
  })

//EDITAR USUÁRIO
app.put('/user/edit/:id' , async(req: Request, res: Response) => {
  let statusCode = 400
  try {
      const id = req.params.id
      const {username, nickname} = req.body
      
    if(!username || !nickname){
      throw new Error ("Passe o username e nickname que deseja alterar!")
    }

    await connection.raw(`
      UPDATE Users SET username = "${username}", nickname = "${nickname}"
      WHERE id = ${id};
    `)

    res.send("Usuário alterado!")

  } catch (error) {
    res.status(statusCode).send(error.message)
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

//PEGAR TODOS USUÁRIOS
app.get('/allUsers', async (req:Request, res:Response) => {
  try {
    const allUsers = await connection.raw(`
      SELECT * FROM Users;
    `)
    res.send(allUsers[0])
  } catch (error) {
    res.send(error)
  }
})

//CRIAR TAREFA
app.post('/createTask', async(req: Request, res:Response) =>{
    let statusCode = 400
  try {
    
    const {title, description, limitDate, creatorUserId} = req.body

    if(!title || !description || !limitDate || !creatorUserId) {
      throw new Error("Preencha todos os campos para criar uma")
    }
    
    const generateId = v4();
    
    const newTask: Task = {
      taskId:Number(Date.now()),
      title,
      description,
      limitDate,
      taskStatus: "to_do",
      creatorUserId:Number(Date.now()),
      creatorUserNickname: generateId
      
    }
    await connection.raw(`
        INSERT INTO ListTasks (taskId, title, description, limitDate, creatorUserId, creatorUserNickname)
        VALUES(${newTask.taskId}, "${newTask.title}", "${newTask.description}",
        "${newTask.limitDate}", ${newTask.creatorUserId}, "${newTask.creatorUserNickname}")
    `)
    res.send("Tarefa criada com sucesso!")
    
  } catch (error) {
    res.status(statusCode).send(error.message)
  }
   
})

//PEGAR TODAS AS TAREFAS
app.get('/allTasks', async (req:Request, res:Response) => {
  try {
    const allTasks = await connection.raw(`
      SELECT * FROM ListTasks;
    `)
    res.send(allTasks)
  } catch (error) {
    res.send(error)
  }
})