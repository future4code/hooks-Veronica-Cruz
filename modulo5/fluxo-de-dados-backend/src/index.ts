import express from "express";
import cors from "cors";
import { produtos, Product} from './data';
// import { v4 as generateId } from 'uuid';

import { AddressInfo } from "net";
import { stringify } from "querystring";

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
app.get('/allProducts',(req,res) => {
    const productsArray = produtos.map((product => {
        return product
    }))
    res.send(productsArray)
})
//==============================================================

//EXERCICIO 3
 app.post('/addProduct', (req,res)=>{
    const username = req.body
    const price = req.body

    const newProduct = {
        id: Date.now().toString(),
        username,
        price
    }

    produtos.push(newProduct)
    res.send(produtos)
    
})
//==============================================================

//EXERCICIO 4
app.get('/allProducts',(req, res)=>{
    res.send(produtos)
})
//==============================================================

//EXERCICIO 5
app.put('/editProduct/:id', (req,res) =>{
    const productId = req.params.id
    const editarProduto = req.body

        const newProducts = produtos.map((produto)=>{
            
        if(produto.id === productId){
            return produto  
        } 
    })
    const produtoEditado = {
        id: Date.now(),
        username,
        price

    };   return editarProduto

      produtos.push(produtoEditado)
      res.send(produtos)
})
//==============================================================

//EXERCICIO 6
app.delete('/delete', (req,res) =>{
res.send("produto deletado!")
})
//==============================================================

//EXERCICIO 7

// app.post('/add', (req,res)=>{
//     let statusCode = 500
   
//     const nomeProduto = req.body.name
//     const precoProduto = req.body.price

//     try {
//         const criarProduto: Product ={
//             id: Date.now().toString(),
//             username,
//             price
//         }

//         if(!username || !price) {
//             statusCode = 401
//             throw new Error("Está faltando algum dado. Verifique e tente novamente!");
//         }
//         if(typeof username !== "string") {
//             statusCode = 401
//             throw new Error("Você inseriu outra coisa diferente de uma palavra!")
//         }
//         if(typeof price !== "number") {
//             statusCode = 401
//             throw new Error("Você inseriu outra coisa diferente de números!")
//         }


//     } catch (error) {
        
//     }

//     res.send("produto criado!")
// })

//==============================================================

//EXERCICIO 8

//==============================================================

//EXERCICIO 9

//==============================================================


