import * as jwt from "jsonwebtoken";
import { authenticationData } from "../model/user";

export class TokenManager {
  generateToken(payload: authenticationData): string {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "24min",
    });
  }

  getTokenData(token: string): authenticationData {
    const result: any = jwt.verify(token, process.env.JWT_KEY as string);

    return { id: result.id };
  }
}
