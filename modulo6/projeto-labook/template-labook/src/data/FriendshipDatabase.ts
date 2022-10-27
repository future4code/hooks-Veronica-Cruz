import { BaseDatabase } from "./BaseDatabase"


export class FriendshipDatabase extends BaseDatabase{

private static TABLE_NAME = "labook_friends"    

public async makeFriendship(user_id: string, friend_id: string){
    await FriendshipDatabase.connection()
    .insert({
        user_id,
        friend_id
    }).into(FriendshipDatabase.TABLE_NAME)
      
}
public async deleteFriendship(user_id: string, friend_id:string){
    await FriendshipDatabase.connection(FriendshipDatabase.TABLE_NAME)
    .where({user_id}).andWhere({friend_id})
    .del()
  
}
public async getFriendsPosts(friend_id:string){
  const result =  await FriendshipDatabase.connection.raw(`
        SELECT labook_friends.friend_id, labook_users.name as Usuário, labook_posts.photo,
        labook_posts.description, labook_posts.created_at, labook_posts.type 
        FROM ${FriendshipDatabase.TABLE_NAME}
        INNER JOIN labook_users ON labook_friends.friend_id = labook_users.id
        INNER JOIN labook_posts ON labook_friends.friend_id = labook_posts.author_id
        WHERE labook_friends.user_id = "${friend_id}"
        ORDER BY created_at DESC;
    `);

    return result
}//passa o user_id para encontrar o post do amigo
}