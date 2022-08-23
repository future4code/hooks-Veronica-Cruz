import express from "express";
import cors from "cors";
import { produtos} from './data';
// import { v4 as generateId } from 'uuid';

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//EXERCICIO 1
app.get('/test',(req,res) => {
    res.send("Tá funcionando!")
})
//==============================================================

//EXERCICIO 2
app.post('/add', (req,res)=>{
    res.send("produto criado!")
})
//==============================================================

//EXERCICIO 3
app.get('/allProducts',(req, res)=>{
    res.send(produtos)
})
//==============================================================

//EXERCICIO 4
app.put('/edit', (req,res) =>{
res.send("produto editado!")
})
//==============================================================

//EXERCICIO 5
app.delete('/delete', (req,res) =>{
res.send("produto deletado!")
})
//==============================================================

//EXERCICIO 6

//==============================================================

//EXERCICIO 7

//==============================================================

//EXERCICIO 8

//==============================================================

//EXERCICIO 9

//==============================================================

