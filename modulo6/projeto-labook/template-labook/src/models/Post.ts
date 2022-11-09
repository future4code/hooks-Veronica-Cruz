enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export class post{
   constructor(
    private id: string,
    private photo: string,
    private description: string,
    private type: POST_TYPES,
    private createdAt: Date,
    private authorId: string
   ){}

   getId(){
      return this.id
   }
   getPhoto(){
      return this.photo
   }
   getDescription(){
      return this.description
   }
   getType(){
      return this.type
   }
   getCreatedAt(){
      return this.createdAt
   }
   getAuthorId(){
      return this.authorId
   }
 }
 
 export interface insertPost{
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
 }

 export interface postInputDTO{
   photo: string,
   description: string,
   type: POST_TYPES,
   authorId: string
  }