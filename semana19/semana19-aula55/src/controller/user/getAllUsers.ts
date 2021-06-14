import { Request, Response } from "express"
import { getAllData } from "../../data/user/getAllData";
import { getData } from "../../services/authenticator";

export const getAllUsers = async (
   req: Request,
   res: Response
):Promise<void> => {
   try {

    const token = req.headers.authorization as string;
    const tokenData = await getData(token);

      res.status(200).send(tokenData);

   } catch (error) {
      res.status(error.status).send({message: error.message});
   }
}