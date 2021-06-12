import { Request, Response } from "express";
import connection from "../connection";
import { cookenuUser } from "../types";

export default async function getUserById(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id } = req.params;

      if (!id) {
         res.statusCode = 404
         throw new Error("Usuário não encontrado")
      }

      const [userSelect]: cookenuUser[][] = await connection.raw(`
        SELECT *
        FROM cookenu_users
        WHERE id = '${id}';
      `);

      const [resultUserList] = userSelect.map((user: cookenuUser) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
      })

      res.status(200).send({ 
        resultUserList
         });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}