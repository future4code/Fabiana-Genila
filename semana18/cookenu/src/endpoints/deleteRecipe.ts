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
    const {id} = req.params;

    if(!id){
       throw new Error("Id não encontrado!");
    };

    if(authenticationData.role === USER_ROLES.ADMIN) {
        await connection("cookenu_recipes")
        .delete()
        .where({id});
        res.statusCode = 200;
        res.statusMessage = "Receita(s) deletada(s) com sucesso";
    };

    if(!authenticationData) {
        throw new Error("Esta receita não foi de sua autoria. Favor, editar receitas criadas por você")
    };

    if(authenticationData.role === USER_ROLES.NORMAL){
      await connection("cookenu_recipes")
      .delete()
      .where({user_id: authenticationData.id});
      res.statusCode = 200;
      res.statusMessage = "Sua receita foi deletada com sucesso!" 
    };

      res.end();

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}