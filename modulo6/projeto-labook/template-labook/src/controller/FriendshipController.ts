import { FriendshipBusiness } from "../business/FriendshipBusiness";
import { friendInputDTO } from "../models/Friends";
import{Request, Response} from 'express'

export class FriendshipController{
    async makeFriendship(req: Request, res: Response){
        try {
            const {user_id, friend_id} = req.body

            const friendshipBusiness = new FriendshipBusiness()
            const friendshipCreated: friendInputDTO = {
                user_id,
                friend_id
            }
            await friendshipBusiness.makeFriendship(friendshipCreated)

            res.status(200).send("Friendship created!")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    async deleteFriendship(req: Request, res: Response){
        try {
            const user_id = req.body.user_id
            const friend_id = req.body.friend_id

            const friendshipBusiness = new FriendshipBusiness()
            const friendshipDeleted: friendInputDTO = {
                user_id,
                friend_id
            }
            await friendshipBusiness.deleteFriendship(friendshipDeleted)

            res.status(200).send("Friendship deleted!")
        } catch (error) {
            res.status(400).send(error.message)
        }
}
async getFriendPosts(req: Request, res: Response){
    try {
        
        const friend_id = req.params.friend_id

        const friendshipBusiness = new FriendshipBusiness()
        
       const result = await friendshipBusiness.getFriendsPosts(friend_id)

        res.status(200).send(result[0])

    } catch (error) {
        res.status(400).send(error.message)
    }
}
}