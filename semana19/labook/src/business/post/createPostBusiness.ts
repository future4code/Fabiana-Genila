import { insertPost } from "../../data/post/insertPost";
import { postData } from "../../model/post";
import { getTokenData } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const createPostBusiness = async (
   postData: postData, 
) => {

   if (
      !postData.photo ||
      !postData.description ||
      !postData.type ||
      !postData.createdAt ||
      !postData.authorId
   ) {
      throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
   }

   const id: string = generateId()

   await insertPost({
      id,
      ...postData
   })
}