export enum USER_ROLES{
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type cookenuUser = {
   id: string
   email: string
   password: string
   name: string
   role: USER_ROLES
}

export type userAddress = {
   street: string
   neighborhood: string
   city: string
   state: string
}

export type cookenuRecipe = {
   id: string
   title: string
   description: string
   created_at?: string
   createdAt?: string
   user_id?: string
}

export type usersRecipe = {
   recipe_id: string
   author_id: string
}

export type usersFollower = {
   follower_id: string
}
