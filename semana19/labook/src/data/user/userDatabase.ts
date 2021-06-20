import {toUserModel, user} from '../../model/user'
import { BaseDatabase } from '../BaseDatabase';

export class UserDatabase extends BaseDatabase {

    async insertUser(user:user) {
        try {
            await this.connection("labook_users").insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
              });
        } catch (error) {
            throw new Error(error.mysqlMessage || error.message)
        };
    };

    async getUserByEmail(email:string): Promise<user>{

        try {

            const result: any = await this.connection("labook_users")
            .select("*")
            .where({ email });

            const user = toUserModel(result[0]);
            
            return user;

        } catch (error) {
            throw new Error(error.mysqlMessage || error.message);
        };
    };
};