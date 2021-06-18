export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
export type postData = {
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 }

export type post = postData & { id: string }