export type authenticationData = {
    id: string
 }
 
export type userData = {
    name: string,
    email: string,
    password: string
 }

 export type user = userData & { id: string }

 export const toUserModel = (
    input: any
 ): user => {
    return {
       id: input.id,
       name: input.name,
       email: input.email,
       password: input.password
    }
 }