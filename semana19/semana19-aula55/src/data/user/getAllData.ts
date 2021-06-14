import { connection } from "../connection";

export const getAllData = async(): Promise<any[]> => {
    try {

        const users: any = [];

        const result = await connection()
        .select("*")
        .from("Users_Arq");

        for(let user of result) {
            users.push(user);
        };

        return users;

    } catch (err) {
        throw new Error(err.sqlMessage || err.message);
    }
};

