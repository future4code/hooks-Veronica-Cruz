import express from 'express'
import { FriendshipController } from '../controller/FriendshipController'

export const friendRouter = express.Router()

const friendshipController = new FriendshipController()

friendRouter.post("/friendship", friendshipController.makeFriendship)
friendRouter.delete("/delFriendship", friendshipController.deleteFriendship)
friendRouter.get("/getFriendPosts/:friend_id", friendshipController.getFriendPosts)
