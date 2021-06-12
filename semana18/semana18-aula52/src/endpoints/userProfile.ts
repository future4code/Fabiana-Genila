import { Request, Response, raw } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { USER_ROLES } from "../types";

export default async function userProfile(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if(verifiedToken.role !== USER_ROLES.NORMAL) {
         res.statusCode = 403;
         res.statusMessage = "Somente usuários com role NORMAL podem acessar esta funcionalidade"
         throw new Error()
      };

      const [result] = await connection.raw(`
        SELECT name, email, role
        FROM to_do_list_users
        WHERE id = '${verifiedToken.id}';
    `);

      res.send(result)

   } catch (error) {

      if(error.message.includes("expired")){
         res.statusCode = 401;
         res.send({message:"Unauthorized"})
      }

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}