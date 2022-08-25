import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

//EXERCICIO 1

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})
//===============================================================

//EXERCICIO 2

type tarefas = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//EXERCICIO 3

const afazeres: tarefas[] = [
    {
        userId: 1,
        id: 21,
        title: "ir no banco",
        completed: false
    },
    {
        userId: 2,
        id: 22,
        title: "comprar pão",
        completed: true 
    },
    {
        userId: 3,
        id: 23,
        title: "estudar",
        completed: false
    },
    {
        userId: 4,
        id: 24,
        title: "ir no dentista",
        completed: false
    },
    {
        userId: 5,
        id: 25,
        title: "fazer atividade física",
        completed: true
    }
]

//EXERCICIO 4

app.get("/afazeres/complete/:isComplete", (req, res)=>{
    let isComplete: any = req.params.isComplete
   if(isComplete === "true"){
    isComplete = true
   } else if (isComplete === "false") {
    isComplete = false
   }else{
    res.send("O parâmetro informado deve ser true ou false")
   }
})

//=========================================================================

// EXERCICIO 5

app.post("/afazeres", (req, res) => {
  const userId = req.body.userId
  const title = req.body.title

  const novaTarefa: tarefas = {
    userId,
    id: Date.now(),
    title,
    completed: false
  }

  afazeres.push(novaTarefa)

  res.send(afazeres)
})
//===========================================

//EXERCICIO 6
// app.put("/todos/:id/completed", (req, res) => {

//   const id = Number(req.params.id)

//   for (let todo of todos) {
//     if (todo.id === id) {
//       todo.completed = !todo.completed
//     }
//   }
//   res.send(todos)
// })
//==============================================

//EXERCICIO 7
// app.delete("/todos/:id", (req, res) => {

//   const id = Number(req.params.id)

//   for (let i = 0; i < todos.length; i++) {
//     if (todos[i].id === id) {
//       todos.splice(i, 1)
//     }
//   }

//   res.send(todos)
// })
//===============================================

//EXERCICIO 8
// app.get("/users/:userId/todos", (req, res) => {
//   const userId = Number(req.params.userId)

//   const result = []

//   for (let todo of todos) {
//     if (todo.userId === userId) {
//       result.push(todo)
//     }
//   }

//   res.send(result)
// })
//================================================