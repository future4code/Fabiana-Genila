import { Request, Response } from "express";
import connection from "../connection";
import { USER_ROLES } from "../types";
import { getTokenData } from "../services/authenticator";

export default async function deleteRecipe(
   req: Request,
   res: Response
): Promise<void> {
   try {

    const token = req.headers.authorization as string;
    const authenticationData  = getTokenData(token);
    const {id} = req.query;

    if(authenticationData.role === USER_ROLES.ADMIN) {
        const userAdmin = await connection("cookenu_recipes")
        .delete()
        .where({id});
        res.statusCode = 200;
        res.statusMessage = "Receita(s) deletada(s) com sucesso";
    };

    // if(authenticationData.role !== USER_ROLES.ADMIN) {
    //     res.statusCode = 403;
    //     res.statusMessage = "Somente usuários com role ADMIN podem deletar receitas sem sua autoria"
    //     throw new Error()
    //  };

    if(!authenticationData) {
        throw new Error("Esta receita não foi de sua autoria. Favor, editar receitas criadas por você")
    };

       const userNormal = await connection("cookenu_recipes")
        .delete()
        .where({user_id: authenticationData.id});

      res.status(202).send("Sua receita foi deletada com sucesso!");

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}