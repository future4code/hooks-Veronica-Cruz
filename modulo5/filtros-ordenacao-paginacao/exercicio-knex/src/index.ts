import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { TipoPessoas } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/allPeople", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const resultado = await connection.raw(`
    SELECT * FROM Pessoas;
  `)
    res.status(200).send(resultado[0])
          
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

//EXERCICIO 1

app.get("/searchPeople", async (req: Request, res: Response) => {
  let errorCode = 400
    try {
      const name = req.query.name

      if(!name){
        errorCode = 404
        throw new Error("Passe um nome para buscar");
        
      }
    const resultado = await connection.raw(`
    SELECT id, name, email, type FROM Pessoas
    WHERE name= "${name}";
  `)
    res.status(200).send(resultado[0])
          
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/searchTypePeople/:id", async (req: Request, res: Response) => {
  let errorCode = 400
    try {
      const type = req.params.id

      if(!type){
        errorCode = 404
        throw new Error("Passe o type para buscar a pessoa");
        
      }
    const resultado = await connection.raw(`
    SELECT id, name, email, type FROM Pessoas
    WHERE type = "${type}";
  `)
    res.status(200).send(resultado[0])
          
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

//EXERCICIO 2

app.get("/searchTypePeople", async (req: Request, res: Response) => {
  let errorCode = 404

  try {
    const userName = req.query.userName as string
    const userType = req.query.userType as string

    let sort = req.query.sort as string
    const order = req.query.order as string

    if (!sort) {        //ordenar o array
      sort = "email"      //por qual coluna será ordenado
    }

    if (!order) {   //ordem crescente ou descrescente
      throw new Error("Por favor, passe uma coluna válida.")
    }

    if (userName) {
      const users = await connection.raw(
        `SELECT * FROM Pessoas
        WHERE name = "${userName}" ORDER BY ${sort} ${order}
        `)

      res.status(200).send(users[0])
    } else if (userType) {
      const types = await connection.raw(
        `SELECT * FROM Pessoas
        WHERE type = "${userType}" ORDER BY ${sort} ${order}
        `)
      res.status(200).send(types[0])
    }

  } catch (error) {

    res.status(errorCode).send(error.message)

  }
})

//EXERCICIO 3

app.get("/searchFivePeople", async (req: Request, res: Response) => {
  let errorCode = 400
    try {
      const size = Number(req.query.size)
      const page = Number(req.query.page)
      const offSet = size * (page - 1)
      
    const resultado = await connection.raw(`
      SELECT * FROM Pessoas
      LIMIT ${size} OFFSET ${offSet} ;
  `)
    res.status(200).send(resultado[0])
          
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/allFunctions", async (req: Request, res: Response) => {
  let errorCode = 400
    try {
      const typeOrName = req.query.typeOrName
         
      let sort = req.query.sort as string
      const order = req.query.order as string
      const size = Number(req.query.size)
      const page = Number(req.query.page)
      const offSet = size * (page - 1)

      if(!page){
      const paginacao = await connection.raw(`
          SELECT * FROM Pessoas
          LIMIT 5;
      `)
        res.send(paginacao[0])
      }
  
      if (!sort) {       
        const resultado = await connection.raw(`
          SELECT * FROM Pessoas
        `)    //coloquei type no postman para indicar a coluna que vai receber sort
        res.send(resultado[0])  
      }

      if (!order) {   
        const resultado = await connection.raw(`
        SELECT * FROM Pessoas
        ORDER BY name DESC
        `)
        res.send(resultado[0]) 
      }
                   
    //  const resultado = await connection.raw(`
    //     SELECT * FROM Pessoas
    //     WHERE name = "${typeOrName}" OR  type = "${typeOrName}"
    //     ORDER BY name ASC
    //     `)

      
    // res.status(200).send(resultado[0])
          
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})







app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});