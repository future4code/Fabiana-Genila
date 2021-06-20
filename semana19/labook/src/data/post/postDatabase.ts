import { BaseDatabase } from "../BaseDatabase";
import { post, toPostModel } from "../../model/post"

export class PostDatabase extends BaseDatabase {

    async createPost (post: post) {
        try {

            await this.connection("labook_posts")
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                author_id: post.authorId,
                created_at: post.createdAt
            })

        } catch (error) {
            throw new Error(error.mysqlMessage || error.message)
        };

    };

    async getPostById(id: string): Promise<post>{
        try {

            const result: any = await this.connection("labook_posts")
            .select("*")
            .where({ id });

            return  toPostModel(result[0]);
            
        } catch (error) {
            throw new Error(error.mysqlMessage || error.message)
        };
    }
};