// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import {users, User, UserType } from "./data"


const app: Express = express();

app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors

//EXERCICIO 1

    app.get("/allUsers", (req,res) => {
        res.send(users)
    })

//===================================================================================

//EXERCICIO 2

//===================================================================================

//EXERCICIO 3

//===================================================================================

//EXERCICIO 4

//===================================================================================




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});