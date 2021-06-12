import { Request, Response } from "express";
import connection from "../connection";
import { USER_ROLES } from "../types";
import { getTokenData } from "../services/authenticator";

export default async function deleteUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

    const token = req.headers.authorization as string;
    const authenticationData  = getTokenData(token);
    const {id} = req.params;
    const {idRecipe} = req.query;

    if(authenticationData.role === USER_ROLES.NORMAL) {
       const userNormal = await connection("cookenu_recipe")
        .delete()
        .where({id}) && ({authenticationData});
        res.statusCode = 200;
        res.statusMessage = "Sua receita foi deletada com sucesso"
    };

    if(authenticationData.role === USER_ROLES.ADMIN) {
        const userAdmin = await connection("cookenu_recipe")
        .delete()
        .where({idRecipe}) 
        res.statusCode = 200;
        res.statusMessage = "A receita foi deletada com sucesso"
    }

    if(authenticationData.role !== USER_ROLES.ADMIN) {
        res.statusCode = 403;
        res.statusMessage = "Somente usuários com role ADMIN podem deletar usuários"
        throw new Error()
     };

     await connection("cookenu_users")
     .delete()
     .where({id});

      if (!id) {
         res.statusCode = 404
         throw new Error("Usuário não encontrado!")
      };

      res.status(200).send({ 
        message: "Usuário deletado com sucesso!"
         });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}