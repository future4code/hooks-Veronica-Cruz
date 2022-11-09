import express from 'express'
import { PostController } from '../controller/PostController'

export const postRouter = express.Router()

const postController = new PostController()

postRouter.post("/createPost", postController.createController)
postRouter.get("/:id", postController.getPostById)