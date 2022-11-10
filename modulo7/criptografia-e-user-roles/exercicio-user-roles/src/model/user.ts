export enum UserRoles {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: UserRoles
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: UserRoles
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export interface EditUserInputDTO {
   id: string,
   name: string,
   nickname: string,
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}

export type AuthenticationData = {
   id: string,
   role: string
}