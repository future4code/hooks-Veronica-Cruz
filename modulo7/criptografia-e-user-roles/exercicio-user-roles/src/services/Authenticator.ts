import * as jwt from "jsonwebtoken"
import { Unauthorized } from "../error/customError";
import { AuthenticationData } from "../model/user";

export class Authenticator {
    public generateToken = (id: string, role: string) => {
        const token = jwt.sign(
            { id, role },
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
        )
        return token
    }

    getTokenData = (token: string): AuthenticationData => {
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY as string) as jwt.JwtPayload
            return {id: payload.id, role: payload.role as string}
        } catch (error:any) {
            console.log(error.message)
            throw new Unauthorized()
        }
       
    }
}