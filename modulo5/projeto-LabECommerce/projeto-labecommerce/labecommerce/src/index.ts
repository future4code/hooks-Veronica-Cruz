import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { Product, Users, Purchase } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

//CRIA NOVO USUÁRIO

app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      throw new Error("Passe o name, email e password do usuário")
    }

    const newUser: Users = {
      id: Number(Date.now()),
      name,
      email,
      password
    }

    await connection.raw(`
      INSERT INTO labecommerce_users (id, name, email, password)
      VALUES(${newUser.id}, "${newUser.name}", "${newUser.email}", "${newUser.password}");
    `)

    res.status(200).send("Usuário criado com sucesso!")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

//BUSCA TODOS USUÁRIOS

app.get("/users", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const allUsers = await connection.raw(`
    SELECT * FROM labecommerce_users
    JOIN Purchases ON Purchases.user_id = labecommerce_users.id;
  `)
    res.status(200).send(allUsers[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})

//CADASTRAR PRODUTO

app.post("/products", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, price, image_url } = req.body

    if (!name || !price || !image_url) {
      throw new Error("Insira nome, preço e imagem do produto")
    }

    const newProduct: Product = {
      id: Number(Date.now()),
      name,
      price,
      image_url
    }

    await connection.raw(`
      INSERT INTO Products 
      VALUES (${newProduct.id}, "${newProduct.name}", ${newProduct.price}, "${newProduct.image_url}");
    `);
    res.send("Produto adicionado com sucesso!")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

//BUSCAR TODOS PRODUTOS

app.get("/allProducts", async (req: Request, res: Response) => {
  let errorCode = 400

  try {

    const sort = req.query.sort
    const orderProducts = req.query.orderProducts

    const allProducts = await connection.raw(`
        SELECT * FROM Products
        ORDER BY "${sort}" "${orderProducts}";
       `)
    res.status(200).send(allProducts[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})

//REGISTRO DE COMPRAS
app.post("/purchases", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const { user_id, product_id, quantity } = req.body

    const priceProduct = await connection.raw(`
        SELECT price FROM Products
        WHERE ${product_id} = id;
      `)
    const result = priceProduct[0][0].price
    const newPurchase: Purchase = {

      id: Number(Date.now()),
      user_id,
      product_id,
      quantity,
      total_price: Number(quantity * result)

    }
    await connection.raw(`
        INSERT INTO Purchases(id, user_id, product_id, quantity, total_price)
        VALUES(${newPurchase.id}, ${newPurchase.user_id}, ${newPurchase.product_id},${newPurchase.quantity}, ${newPurchase.total_price});
      `)
    res.send("Compra efetuada!")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


//COMPRAS POR USUÁRIO

app.get("/users/:user_id/purchases", async (req: Request, res: Response) => {
  let errorCode = 400

  try {

    const user_id = req.params.user_id

    const userPurchases = await connection.raw(`
          SELECT * from labecommerce_users
          JOIN Purchases ON Purchases.user_id = labecommerce_users.id
          WHERE labecommerce_users.id = ${user_id};
      `)

    if (userPurchases[0].length === 0) {
      throw new Error("Não foi possível encontrar compras neste usuário!")
    }

    res.status(200).send(userPurchases[0])
  }

  catch (err: any) {
    res.status(errorCode).send(err.message)
  }
})

//PEGAR TODAS AS COMPRAS

app.get("/allPurchases", async (req: Request, res: Response) => {
    try {
    const allPurchases = await connection.raw(`
      SELECT * FROM Purchases;
`)
    res.send(allPurchases[0])
  } catch (error) {
    res.send(error)
  }

})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});