import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { user } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (
   user: user
):Promise<string> => {
   if (
      !user.name ||
      !user.email ||
      !user.password
   ) {
      throw new Error('"name", "email" and "password" must be provided')
   }

   const cypherPassword = await hash(user.password);

   const newUser = {
      ...user,
      password: cypherPassword,
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id
   })

   return token

}
