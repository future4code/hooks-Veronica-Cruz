import { v3 } from "uuid";
import { IdGeneratorInterface } from "./IdGenerator";

export class IdGenerator2 implements IdGeneratorInterface {
  public generateId = () => v3("name", "namespace");
}