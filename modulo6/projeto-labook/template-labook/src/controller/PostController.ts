import {Request, Response} from 'express';
import {PostBusiness } from '../business/PostBusiness'
import { postInputDTO } from '../models/Post';


export class PostController{
 async createController(req: Request, res: Response){
    try {
        const{photo, description, type, authorId} = req.body

        const postBusiness = new PostBusiness()
        const post: postInputDTO = {
            photo,
            description,
            type,
            authorId
        }

        await postBusiness.createBusiness(post)

        res.status(200).send("Post Created!")
    } catch (error) {
        res.status(400).send(error.message)
    }
    }

    async getPostById(req: Request, res: Response){
       
   try {
      let message = "Success!"

      const id = req.params.id


      if (!id) {
         res.statusCode = 404
         message = "Post not found"
         throw new Error(message)
      }
      const postBusiness = new PostBusiness()
      const result = await postBusiness.getPostById(id)


      res.status(200).send(result)

   } catch (error:any) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400
      res.send({ message })
   }
}
   async makeFriendship(req: Request, res: Response){

      const {user_id, friend_id} = req.body
      
   }
    }
