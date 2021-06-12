import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { cookenuUser } from "../types";

export default async function getSelfId(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const tokenData = getTokenData(req.headers.authorization!);
       
      if (!tokenData) {
         res.statusCode = 404
         throw new Error("Usuário não encontrado")
      };

      const [userSelect]: cookenuUser[][] = await connection("cookenu_users")
      .where({id: tokenData.id});

      const [resultSelfList] = userSelect.map((user: cookenuUser) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
      })

      res.status(200).send({ 
        resultSelfList
         });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}