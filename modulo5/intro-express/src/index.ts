import express from "express";
import cors from "cors";

import { AddressInfo } from "net";

const app = express();

app.use(cors());

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
app.get("/", (req, res) => {
  res.send("Hello from Express")
})
//===========================================

//EXERCICIO 2
type searchUsers = {
  id: number,
  name: string,
  phone: number,
  email: string,
  website: string
}
//===========================================

//EXERCICIO 3
const users: searchUsers[] = [
  { id: 32, name: "Verônica", phone: 983224416, email: "veronicasgc@gmail.com", website: "www.vsgc.com" },
  { id: 57, name: "Nilce", phone: 984722892, email: "nilcesgc@gmail.com", website: "www.nsgc.com" },
  { id: 30, name: "Angélica", phone: 984026798, email: "angelicasgc@gmail.com", website: "www.asgc.com" },
  { id: 23, name: "Juliana", phone: 984595770, email: "julianasgc@gmail.com", website: "www.jsgc.com" }
]

//===========================================

//EXERCICIO 4

app.get('/users', (req, res) => {
    res.send(users)
  })
//===========================================

//EXERCICIO 5
type getPosts = {
  id: number,
  title: string,
  body: string,
  userId: number
}
//===========================================

//EXERCICIO 6

const posts: getPosts[] = [
  {
    id: 1,
    title: "Post Verônica",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas tota",
    userId: 32
  },

  {
    id: 2,
    title: "Post Nilce",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas tota",
    userId: 32
  },

  {
    id: 3,
    title: "Post Angélica",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas tota",
    userId: 30
  },

  {
    id: 4,
    title: "Post Juliana",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas tota",
    userId: 23
  }
]
//===========================================

//EXERCICIO 7

app.get('/posts', (req, res) => {
  res.send(posts)
})

//===========================================

//EXERCICIO 8

app.get('/posts/:userId', (req, res) => {
  const userId: number = Number(req.params.userId)
  const postId = posts.filter((post) => {
    if (userId === post.userId) {
      return post
    }
  })
  res.send(postId)
})
//===========================================

