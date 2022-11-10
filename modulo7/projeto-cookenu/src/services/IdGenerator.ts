import { v4 } from "uuid";

export interface IdGeneratorInterface {
  generateId: () => string;
}
export class IdGenerator implements IdGeneratorInterface {
  public generateId = () => v4();
}
