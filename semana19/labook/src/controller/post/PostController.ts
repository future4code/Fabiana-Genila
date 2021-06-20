import { Request, Response } from "express";
import { PostBusiness } from "../../business/post/PostBusiness";
import { createPostInputDTO, getPostByIdInputDTO, getPostByIdOutputDTO } from "../../model/post";
import { post } from "../../model/post";

export class PostController {
  createPost = async (req: Request, res: Response) => {
    try {
      let message = "Success!";
      const token: string = req.headers.authorization as string;

      const input: createPostInputDTO = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        token,
      };

      await new PostBusiness().createUser(input);

      res.status(201).send({ message });
    } catch (error) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;

      res.send({ message });
    }
  };

  getPostById = async (req: Request, res: Response) => {
    try {
      let message = "Success!";

      const input: getPostByIdInputDTO = {
        id: req.params.id
      };

      const post: post = await new PostBusiness.getPostById(input);

      const output: getPostByIdOutputDTO = {
        photo: post.photo,
        type: post.type,
        description: post.description,
        createdAt: post.createdAt
      }

      res.status(200).send({ message, post });
    } catch (error) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;

      res.send({ message });
    }
  };
}
