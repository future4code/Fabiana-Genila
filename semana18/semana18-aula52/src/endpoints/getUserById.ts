import { Request, Response, raw } from "express";
import connection from "../connection";
import { getData, getTokenData } from "../services/authenticator";
import { USER_ROLES } from "../types";

export default async function getUserById(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const token = req.headers.authorization as string;
      const tokenData = getData(token);

      const [result] = await connection.raw(`
        SELECT id, email
        FROM to_do_list_users
        WHERE id = '${tokenData.id}';
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