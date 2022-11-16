import * as jwt from "jsonwebtoken";
import { AuthenticationData, UserRole } from "../models/User"; 

export class TokenGenerator {
  public generateToken = (id: string, role: UserRole) => {
    const token = jwt.sign({ id, role }
    , process.env.JWT_KEY as string, {
      expiresIn: "1h",
    });
    return token;
  };

  public tokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as jwt.JwtPayload;

    return {
      id: payload.id as string,
      role: UserRole[payload.role as keyof typeof UserRole],
    };
  };
}