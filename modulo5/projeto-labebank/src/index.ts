import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import {v4 as generateId} from 'uuid';
import { UsersAccounts, accounts, Extrato } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.get('/allAccounts',(req,res) => {

        let statusCode = 400

    try {
        //se o array tiver vazio retorne...
        if(!accounts.length){
            statusCode = 404
            throw new Error("Não foi encontrado nenhuma conta!")
        }
        res.send(accounts)
    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
   
})

app.post('/createAccount',(req,res) => {
    let statusCode = 400
    try {
            const {nome, cpf, nascimentoString, age} = req.body
           
            const [dia, mes, ano] = nascimentoString.split("/")   // para converter array para data
           
             const nascimento: Date = new Date(`${ano}-${mes}-${dia}`)  // para a data ter formato de data
            
                if(age < 18) {
                statusCode = 422
                throw new Error("Você precisa ser maior que 18 para criar uma conta")
            }
        const newUser = {
            nome,
            cpf,
            nascimento,
            saldo: 0,
            extrato: []
        }
        accounts.push(newUser)
        res.send(accounts)
    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
})

app.get('/balance', (req,res) => {
//    //passar nome e cpf  para ver saldo
     const cpf = req.params

    const consultaSaldo = accounts.find((conta) => {
        conta.cpf === cpf
    })
    res.send(consultaSaldo)
   
})

// app.patch('/addSaldo', (req.res) => {
//     // adicionar saldo passando nome, cpf e valor no body
// })

