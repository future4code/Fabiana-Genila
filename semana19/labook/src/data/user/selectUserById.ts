import { connection } from "../connection"
import { toUserModel, user } from "../../model/user"

export const selectUserByEmail = async (
   email: string
): Promise<user> => {
   try {
       
      const queryResult = await connection("labook_users")
         .select("*")
         .where({ email })

         if (!queryResult[0]) {
            const message = "Invalid credentials"
            throw new Error(message)
         }

         return toUserModel(queryResult[0])

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}

