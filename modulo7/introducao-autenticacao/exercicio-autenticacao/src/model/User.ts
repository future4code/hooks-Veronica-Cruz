
// export class User{
//     constructor(
//         private id: string,
//         private name: string,
//         private email: string,
//         private password: string
//     ){ }
//     getId(){
//         return this.id
//     }
//     getName(){
//         return this.name
//     }
//     getEmail(){
//         return this.email
//     }
//     getPassword(){
//         return  this.password
//     }
    
//     }

    export interface userInputDTO {
        name: string,
        email: string,
        password: string
    }

    export type user = {
        id: string,
        name: string, 
        email: string,
        password: string
    }

    export interface AuthenticationData  {
        id: string
    }
    
    export type loginInputDTO =  {
        email: string,
        password: string
    }