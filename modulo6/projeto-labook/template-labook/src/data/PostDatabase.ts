import { BaseDatabase } from "./BaseDatabase";
import { insertPost, post } from "../models/Post";

export class PostDatabase extends BaseDatabase{
    private static TABLE_NAME = 'labook_posts'
    
   public async createDatabase (post: insertPost) {
        await PostDatabase.connection.insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            author_id: post.authorId,
            // ...post, author_id:post.authorId, create_at:post.createdAt
        }).into(PostDatabase.TABLE_NAME);
    }

    public async getPostById(id:string){
        const queryResult = await PostDatabase.connection(PostDatabase.TABLE_NAME)
            .select('*')
            .where({id}) //entre chaves pq vai ser passado por queryparams

      const post = {
         id: queryResult[0].id,
         photo: queryResult[0].photo,
         description: queryResult[0].description,
         type: queryResult[0].type,
         createdAt: queryResult[0].created_at,
         authorId: queryResult[0].author_id,
      }
      return post
    }
 
}