import express from "express";
import cors from "cors";
import { produtos, Product } from './data';
// import { v4 as generateId } from 'uuid';

import { AddressInfo } from "net";
import { stringify } from "querystring";
import { NewLineKind } from "typescript";

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
app.get('/allProducts', (req, res) => {
    const productsArray = produtos.map((product => {
        return product
    }))
    res.send(productsArray)
})
//==============================================================

//EXERCICIO 3

// app.post('/addProduct', (req, res) => {
//     const username = req.body
//     const price = req.body

//     const newProduct = {
//         id: Date.now().toString(),
//         username,
//         price
//     }

//     produtos.push(newProduct)
//     res.send(produtos)

// })
//==============================================================

//EXERCICIO 4
app.get('/allProducts', (req, res) => {
    res.send(produtos)
})
//==============================================================

//EXERCICIO 5
// app.put('/editProduct/:id', (req, res) => {
//     try {
//         let id = req.params.id
//         let { username, price } = req.body
//         let product: Product | undefined = produtos.find(item => item.id === id);

//         if (!product) {
//             throw new Error("Esse id não foi encontrado!")
//         }
//         product.username = username,
//             product.price = price
//         res.send(product)
//     } catch (error: any) {
//         res.send(error.message)
//     }
// })
//==============================================================

//EXERCICIO 6
app.delete('/deleteProduct/:id', (req, res) => {
    try {
        const productId = req.params.id

        let produtoEncontrado = false

        for (let prod = 0; prod < produtos.length; prod++) {
            if (produtos[prod].id === productId) {
                produtos.splice(prod, 1)
                produtoEncontrado = true
            }
        }
        if (!produtoEncontrado) {
            throw new Error("Produto não foi encontrado! Digite um id válido!")
        }
        res.send(produtos)

    } catch (error: any) {
        if (error.message) {
            res.status(404)
        }
        res.send("Erro inesperado!")
    }
})
//==============================================================

//EXERCICIO 7

app.post('/addProduct', (req, res) => {
    
    try {
        let statusCode = 500
        const username = req.body.username
        const price = req.body.price

        if (!username || !price) {
            statusCode = 401
            throw new Error("Está faltando algum dado. Verifique e tente novamente!");
        }
        if (typeof username !== "string") {
            statusCode = 401
            throw new Error("Por favor insira uma palavra para o nome do produto!")
        }
        if (typeof price !== "number") {
            statusCode = 401
            throw new Error("Por favor insira um número para o preço do produto!")
        }
        const criarProduto = {
            id: Date.now().toString(),
            username,
            price
        }
        produtos.push(criarProduto)

        res.send(produtos)

    } catch (error:any) {
        if (error.message) {
            res.status(404)
        }
        res.send("Erro inesperado!")
    }

    res.send("Ocorreu um erro. Tente novamente!")
})

//==============================================================

//EXERCICIO 8

app.put('/editProduct/:id', (req, res ) => {
    let statusCode = 500
   try {
    let productId = req.params.id
    const precoProduto = req.body.price
    let prodFound = false

    for (let prod = 0; prod < produtos.length; prod++) {
        if (produtos [prod].id === productId){
            produtos[prod].price = precoProduto
            prodFound = true
        }
    }
   
    if(!precoProduto) {
        statusCode = 400 
        throw new Error("Você deve inserir um valor para preço do produto");
        
    }
    if(typeof precoProduto !== "number"){
        statusCode = 401
        throw new Error("O preço informado não é válido. Insira um número.");
        
    }
    if (precoProduto <= 0) {
        statusCode = 404
        throw new Error("Insira um valor maior e diferente de zero");
        
    }

    let product: Product | undefined = produtos.find(item => item.id === productId);

        if (!product) {
            throw new Error("Esse id não foi encontrado!")
        }
        res.send(produtos)
    
   } catch (error: any) {
    if (error.message) {
        res.status(404)
    }
    res.send("Erro inesperado!")
   } 


})
//==============================================================

//EXERCICIO 9

app.delete("/products/:id", (req, res) => {
    try {
      const id = req.params.id
  
      let isProductFound = false
  
      for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === id) {
            produtos.splice(i, 1)
          isProductFound = true
        }
      }
  
      if (!isProductFound) {
        throw new Error("Produto não encontrado")
      }
  
      res.send(produtos)
  
    } catch (error: any) {
      switch (error.message) {
        case "Produto não encontrado":
          res.status(404)
          break
        default:
          res.status(500)
      }
      
      res.send(error.message || "Erro inesperado")
    }
  })
//==============================================================


