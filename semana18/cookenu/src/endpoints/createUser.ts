import { Request, Response } from "express";
import connection from "../connection";
import { cookenuUser, USER_ROLES } from "../types";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, password, role } = req.body

      if (!name || !email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'role', 'password' e 'email'")
      }

      if(!(role in USER_ROLES)){
         throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'")
      }

      const [user] = await connection('cookenu_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const newUser: cookenuUser = {
         id,
         name,
         email,
         password: createHash(password),
         role
      }

      await connection('cookenu_users')
         .insert(newUser);

      const token: string = generateToken({
         id,
         role
      });

      res.status(201).send({ newUser, token });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}