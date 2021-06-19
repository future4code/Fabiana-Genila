import { Request, Response } from "express";
import connection from "../connection";
import { cookenuRecipe } from "../types";

export default async function getRecipeById(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id } = req.params;

      if (!id) {
         res.statusCode = 404
         throw new Error("Receita não encontrada")
      }

      const [recipeList]: cookenuRecipe[][] = await connection.raw(`
        SELECT *,
        DATE_FORMAT (created_at, "%d/%m/%Y")
        AS createdAt FROM cookenu_recipes
        WHERE id = '${id}';
      `);
      
      const [resultRecipeList] = recipeList.map((recipe: cookenuRecipe) => {
          return {
              id: recipe.id,
              title: recipe.title,
              description: recipe.description,
              createdAt: recipe.createdAt
          }
      });

      res.status(200).send({ 
        resultRecipeList
         });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}