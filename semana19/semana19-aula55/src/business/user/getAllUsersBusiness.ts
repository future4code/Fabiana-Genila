import { getData } from "../../services/authenticator";
import { getAllData } from "../../data/user/getAllData";

export const getAllUsersBusiness = async (
   token: string
) => {
   
    getData(token);
    return await getAllData


}
