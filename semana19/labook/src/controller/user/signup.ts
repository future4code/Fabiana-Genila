import { Request, Response } from "express";
import { generateToken } from "../../services/authenticator";
import { user } from '../../model/user'
import { signupBusiness } from "../../business/user/signupBusiness";

export const signup = async (
    req: Request, 
    res: Response,
    user: user
    ) => {  
    try {
       let message = "Success!"
       const { name, email, password } = req.body

       const token: string = generateToken({ id: user.id })
 
       res.status(201).send({ message, token })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
 }