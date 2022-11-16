import { CustomError } from "../error/CustomError";
import { EditUserInput, user } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "Cookenu_users";

  //signup
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  
  //login
  public findUser = async (email: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  //PEGAR ID E EMAIL DO USUÁRIO CADASTRADO ATRAVÉS DO TOKEN FORNECIDO NO LOGIN
  // public getUser = async (user: EditUserInput) => {
  //   try {
  //     await UserDatabase.connection
  //       .select({ id: user.id, email: user.email })
  //       .where({ token: user.token })
  //       .into(UserDatabase.TABLE_NAME);
  //   } catch (error: any) {
  //     throw new CustomError(400, error.message);
  //   }
  // };

 
}

