import {app} from "./app"
import { userController } from "./controller/userController"


app.get("/", async function(){
   console.log("endpoint teste")
})

const UserController = new userController()
app.post('/users', UserController.createUser)

app.get('/allUsers', UserController.getAllUsers)

app.delete('/delUser/:id', UserController.deleteUser)

