import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";

app.get("/recipes", getAllRecipes)

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
//        const users = await selectAllUsers()
 
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No recipes found")
//        }
 
//        res.status(200).send(users)
       
//     } catch (error) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }
















