import { prismaClient } from "../application/database";
import { validate } from "../helper/validate";
import {
  createPostValidation,
  updatePostValidation,
} from "../validation/post-validation";

const createPostService = async (request) => {
  const user_id = request.decodedToken.user_id;
  const post = validate(createPostValidation, request.body);
  post.user_id = user_id;
  post.created_at = new Date();
  return await prismaClient.post.create({
    data: post,
    select: {
      id: true,
      user_id: true,
      title: true,
      type: true,
      is_public: true,
      content: true,
    },
  });
};

const updatePostService = async (request) => {
  const post_id = request.params.postId;
  const post = validate(updatePostValidation, request.body);
  return await prismaClient.post.update({
    where: {
      id: post_id,
    },
    data: post,
    select: {
      id: true,
      user_id: true,
      title: true,
      type: true,
      is_public: true,
      content: true,
    },
  });
};

const deletePostService = async (request) => {
  const post_id = request.params.postId;
  return await prismaClient.post.delete({
    where: {
      id: post_id,
    },
  });
};

const getAllPostService = async (request) => {
  return await prismaClient.post.findMany({});
};

export default {
  createPostService,
  updatePostService,
  deletePostService,
  getAllPostService
};
