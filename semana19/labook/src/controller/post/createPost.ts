import { Request, Response } from "express";
import { createPostBusiness } from "../../business/post/createPostBusiness";
import { getTokenData } from "../../services/authenticator";

export const createPost = async (
   req: Request,
   res: Response
) => {
   try {

      const { photo, description, type, createdAt, authorId } = req.body

      const token = req.headers.authorization as string;
      const tokenData = await getTokenData(token);

      await createPostBusiness({
         photo, description, type, createdAt, authorId
      })

      res.status(201).send(tokenData)

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}