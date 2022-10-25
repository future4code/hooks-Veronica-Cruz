import { UserDatabase } from "../data/UserDatabase"
import { generateId} from "../services/generateId"
import { UserInputDTO } from "../models/userDTO"
import { InvalidRequest } from "../error/InvalidRequest"

export class UserBusiness {
  async create(input: UserInputDTO):Promise<void> {
   const {name, email, password} = input
   
    if (!email || !name || !password) {
      throw new InvalidRequest()
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

}
