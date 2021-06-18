import { compare } from "../../services/hashManager"
import { selectUserByEmail } from "../../data/user/selectUserById"
import { generateToken } from "../../services/authenticator"
import { user } from "../../model/user"

export const loginBusiness = async (
   email: string,
   password: string
) => {
   if (!email || !password) {
      throw new Error('"email" and "password" must be provided')
   }

   const user: user = await selectUserByEmail(email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id
   })

   return token
}