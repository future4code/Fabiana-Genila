import { Request, Response } from "express";
import connection from "../connection";
import { cookenuRecipe, cookenuUser } from "../types";
import { generateId } from "../services/idGenerator";
import { authenticationData, getTokenData } from "../services/authenticator";

export default async function createRecipe(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { title, description } = req.body;
      const tokenData = getTokenData(req.headers.authorization!);
      const id: string = generateId();

      if (!title || !description) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name' e 'description'")
      };

      const [recipe] = await connection('cookenu_recipes')
      .where({ title });

   if (recipe) {
      res.statusCode = 409
      throw new Error('Receita já cadastrada')
   };

      const userIdResult: cookenuUser[] = await connection('cookenu_users')
      .where({id: tokenData.id});


      const mappedUserId = userIdResult.map(user => {
            return user.id
         }
      );

      const user_id: any = mappedUserId;

      const newRecipe: cookenuRecipe = {
         id,
         title,
         description,
         user_id
      };

      await connection('cookenu_recipes')
      .insert(newRecipe);

      res.status(201).send({ 
         message: "Receita criada com sucesso!",
         newRecipe
         });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}