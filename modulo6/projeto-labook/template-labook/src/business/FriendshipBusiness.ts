import { FriendshipDatabase } from "../data/FriendshipDatabase";
import { InvalidFriendId, InvalidUserId } from "../error/CustomError";
import { friendInputDTO } from "../models/Friends";



export class FriendshipBusiness{

public async makeFriendship(input: friendInputDTO){

    const {user_id,friend_id} = input

    if(!user_id){
        throw new InvalidUserId()
    }
    if(!friend_id){
        throw new InvalidFriendId()
    }

    const friendshipDatabase = new FriendshipDatabase();
    await friendshipDatabase.makeFriendship(user_id, friend_id)
     
}
public async deleteFriendship(input: friendInputDTO){

    const {user_id,friend_id} = input

    if(!user_id){
        throw new InvalidUserId()
    }
    if(!friend_id){
        throw new InvalidFriendId()
    }

    const friendshipDatabase = new FriendshipDatabase();
    await friendshipDatabase.deleteFriendship(user_id, friend_id)
}

public async getFriendsPosts(friend_id:string){

    const friendshipDatabase = new FriendshipDatabase();
    const result = await friendshipDatabase.getFriendsPosts(friend_id)
    return result
}
}