import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from "../error/customError";
import {  UserInputDTO,  user,  EditUserInputDTO,  EditUserInput,  LoginInputDTO, UserRoles,} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";




const idGenerator = new IdGenerator()
const authenticator = new Authenticator()
const hashManager = new HashManager()

export class UserBusiness {
  public signup = async (input: UserInputDTO) => {
    try {
      const { name, nickname, email, password, role } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();
    

      const hashPassword : string = await hashManager.hash(password)

      if(role !== "ADMIN" && role !== "NORMAL") {
        throw new CustomError(400, "Preencha o campo 'role' corretamente!")
      }

      const user: user = {
        id,
        name,
        nickname,
        email,
        password: hashPassword,
        role: UserRoles[role]
      };

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = authenticator.generateToken(id, user.role)

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUserByEmail(email);

      if(!user) {
        throw new UserNotFound()
      }

      const isValidPassword: boolean = await hashManager.compare(
        password,
        user.password
      )

      if(!isValidPassword) {
        throw new InvalidPassword()
      }
      const token = authenticator.generateToken(user.id, user.role)

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, token, id } = input;

      if (!name || !nickname || !token || !id) {
        throw new CustomError(
          400,'Preencha os campos "id", "name","nickname" e "token"')
      }

      if (name.length < 4) {
        throw new InvalidName();
      }
      const userDatabase = new UserDatabase()
      const data = authenticator.getTokenData(token)
     

      if(!data.id){
        throw new Unauthorized()
      }

      if(data.role !== UserRoles.ADMIN){
        throw new Unauthorized();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };
      
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
