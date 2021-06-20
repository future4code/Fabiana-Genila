export type authenticationData = {
    id: string
 }
 
export type user = {
    id: string,
    name: string,
    email: string,
    password: string
 }

export interface SignupInputDTO {
   name: string
   email: string
   password: string
}

export interface LoginInputDTO {
   email: string
   password: string
}

export function toUserModel(obj: any): user {
   return obj && {
      id: obj.id,
      name: obj.name,
      email: obj.email,
      password: obj.password
   }
}

//  export type user = userData & { id: string }

//  export const toUserModel = (
//     input: any
//  ): user => {
//     return {
//        id: input.id,
//        name: input.name,
//        email: input.email,
//        password: input.password
//     }
//  }