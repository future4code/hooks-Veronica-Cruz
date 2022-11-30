import { UserDatabase } from "../data/UserDatabase";
import {CustomError, InvalidEmail, InvalidName,InvalidPassword, Unauthorized, UserNotFound,InvalidRole} from "../error/CustomError";
import { UserInputDTO, user, EditUserInputDTO, EditUserInput, LoginInputDTO, UserRole} from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGeneratorInterface } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

export class UserBusiness {
  constructor(
    private readonly idGenerator: IdGeneratorInterface,
    private readonly tokenGenerator: TokenGenerator,
    private readonly hashManager: HashManager,
    private readonly userDatabase: UserDatabase
  ) {}

  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password } = input;
      let role = input.role
    

      if (!name || !email || !password || !role) {
        throw new CustomError(400,'Preencha os campos "name", "email", "password" e "role"');
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (role !== "NORMAL" && role !== "ADMIN") {
        throw new InvalidRole();
      }

      if (role !== "NORMAL" && role !== "ADMIN") {
        role = "NORMAL";
      }

      const id: string = this.idGenerator.generateId();

      const hashPassword: string = await this.hashManager.hash(password);

      const user: user = {
        id,
        name,
        email,
        password: hashPassword,
        role: UserRole[role as keyof typeof UserRole]
      };

      await this.userDatabase.insertUser(user);
      const token = this.tokenGenerator.generateToken(id, user.role);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos"email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await this.userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound();
      }

      const isValidPassword: boolean = await this.hashManager.compare(
        password,
        user.password
      );

      if (!isValidPassword) {
        throw new InvalidPassword();
      }

      const token = this.tokenGenerator.generateToken(user.id, user.role);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

 //PEGAR ID E EMAIL DO USUÁRIO CADASTRADO ATRAVÉS DO TOKEN FORNECIDO NO LOGIN
  // public getUser = async (input: EditUserInputDTO) => {
  //   try {
 
     

   
  //   } catch (error: any) {
  //     throw new CustomError(400, error.message);
  //   }
  // };
}
