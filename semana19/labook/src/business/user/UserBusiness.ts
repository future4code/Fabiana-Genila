import { LoginInputDTO, SignupInputDTO } from "../../model/user";
import { HashManager } from "../../services/hashManager";
import {IdGenerator} from '../../services/idGenerator';
import { user } from "../../model/user";
import { UserDatabase } from "../../data/user/userDatabase";
import { TokenManager } from "../../services/authenticator";
import { compare } from "bcryptjs";

export class UserBusiness {
   
   async signup(input: SignupInputDTO): Promise<string>{

      try { 

         if (!input.name || !input.email || !input.password) {
         throw new Error('"name", "email" and "password" must be provided');
       }
 
       const idGenerator = new IdGenerator();
       const id: string = idGenerator.generateId();
       
       const hashManager = new HashManager();
       const cypherPassword = await hashManager.hash(input.password);

       const user: user = {
          id,
          name: input.name,
          email: input.email,
          password: cypherPassword
       };

       const userDatabase = new UserDatabase();
       await userDatabase.insertUser(user);

       const tokenManager = new TokenManager(); 
       const token: string = tokenManager.generateToken({ id });

       return token;

      } catch(error) {
         throw new Error(error.message);
      };
   };

   async login(input: LoginInputDTO): Promise<string> {
      try {

     if (!input.email || !input.password) {
         throw new Error('"email" and "password" must be provided')
      };

      const userDatabase = new UserDatabase();
      const user: user = await userDatabase.getUserByEmail(input.email);

      if (!user) {
         throw new Error( "Invalid credentials");
      };

      const passwordIsCorrect: boolean = await compare(input.password, user.password)

      if (!passwordIsCorrect) {
         throw new Error("Invalid credentials")
      }

      const tokenManager = new TokenManager();
      const token: string = tokenManager.generateToken({
         id: user.id
      })

      return token;

      } catch(error) {
         throw new Error(error.message)
      }
      
 

   };
};
