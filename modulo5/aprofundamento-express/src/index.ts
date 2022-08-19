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
        id: 1,
        title: "ir no banco",
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: "comprar pão",
        completed: true 
    },
    {
        userId: 3,
        id: 3,
        title: "estudar",
        completed: false
    },
    {
        userId: 4,
        id: 4,
        title: "ir no dentista",
        completed: false
    },
    {
        userId: 5,
        id: 5,
        title: "fazer atividade física",
        completed: true
    }
]

app.get("./completed", (req, res)=>{
    
})