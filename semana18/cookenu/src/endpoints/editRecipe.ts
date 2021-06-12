import { Request, Response, raw } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { cookenuRecipe } from "../types";

export default async function editRecipe(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);
      const {id} = req.params;

      if(!verifiedToken) {
          throw new Error("Esta receita não foi de sua autoria. Favor, editar receitas criadas por você")
      };

      const { title, description } = req.body

      if (!title && !description) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'title' ou 'description' da receita"
         throw new Error()
      };

      const resultList: cookenuRecipe[] = await connection('cookenu_users');

      const mappedUserId = resultList.map(user => {
         return user.id
      });

      const user_id: any = mappedUserId;

      const result = await connection.raw(`
        UPDATE cookenu_recipes
        SET title = '${title}', description = '${description}'
        WHERE user_id = '${user_id}' AND id = '${id}'; 
      `);

         console.log(result)

      res.status(202).send("Receita editada com sucesso")

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