import { connection } from "../connection";
import { post } from "../../model/post";
import { getTokenData } from "../../services/authenticator";

export const insertPost = async (
   post: post
) => {

   const tokenData = await getTokenData(token);
   
   await connection('labook_posts')
      .insert({
         id: post.id,
         photo: post.photo,
         description: post.description,
         type: post.type,
         created_at: post.createdAt,
         authorId: tokenData.id
      })
}