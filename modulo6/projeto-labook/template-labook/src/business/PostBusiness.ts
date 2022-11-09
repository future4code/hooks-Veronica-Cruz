import{PostDatabase} from '../data/PostDatabase'
import { InvalidPhoto, InvalidDescription, InvalidCreateAT, InvalidType } from '../error/CustomError';
import { postInputDTO } from '../models/Post';
import { generateId } from '../services/generateId';

export class PostBusiness{
    async createBusiness(input: postInputDTO){
        const {photo, description,type, authorId} = input

        if(!photo){
            throw new InvalidPhoto()
        }
        if(!description){
            throw new InvalidDescription()
        }
        if(!authorId){
            throw new InvalidCreateAT()
        }
        if(!type){
            throw new InvalidType()
        }

        const postDatabase = new PostDatabase();
        const post = {
            id: generateId(),
            photo,
            description,
            type,
            authorId
         
          
        }
        await postDatabase.createDatabase(post)
    }

    public async getPostById(id: string){
        const postDatabase = new PostDatabase()
        const result = await postDatabase.getPostById(id)

        return result
    }
   
}