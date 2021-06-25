import { createPostInputDTO, getPostByIdInputDTO } from "../../model/post";
import { authenticationData } from "../../model/user";
import { TokenManager } from "../../services/authenticator";
import { IdGenerator } from "../../services/idGenerator";
import { post } from "../../model/post";
import { PostDatabase } from "../../data/post/postDatabase";

export class PostBusiness {
  
  async createUser(input: createPostInputDTO) {
    try {
      if (!input.photo || !input.description || !input.type) {
        throw new Error("'photo', 'description' and 'type' must be provided");
      }

      const tokenManager = new TokenManager();
      if (!input.token) {
        throw new Error("A jwt must be provided");
      }

      const tokenData: authenticationData = tokenManager.getTokenData(
        input.token
      );
      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generateId();
      const post: post = {
        id,
        authorId: tokenData.id,
        createdAt: new Date(),
        description: input.description,
        photo: input.photo,
        type: input.type,
      };

      await new PostDatabase().createPost(post);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  async getPostById(input: getPostByIdInputDTO) {
    try {
      const post: post = await new PostDatabase().getPostById(input.id);

      if (!post) {
        throw new Error("Post not found");
      };

      return post;
    } catch (error) {
      throw new Error(error.message);
    };
  };
};
