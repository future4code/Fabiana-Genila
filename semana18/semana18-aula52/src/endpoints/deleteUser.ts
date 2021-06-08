import { Request, Response, raw } from "express";
import connection from "../connection";
import { getData, getTokenData } from "../services/authenticator";
import { USER_ROLES } from "../types";

export default async function deleteUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const token = req.headers.authorization as string;
      const authenticationData  = getData(token);
      const {id} = req.params;

      if(authenticationData .role !== USER_ROLES.ADMIN) {
         res.statusCode = 403;
         res.statusMessage = "Somente usuários com role ADMIN podem deletar usuários"
         throw new Error()
      };

        await connection.raw(`
        DELETE
        FROM to_do_list_users
        WHERE id = '${id}';
    `);

      res.status(200).send({
          message: "Usuário deletado com sucesso!"
        });

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