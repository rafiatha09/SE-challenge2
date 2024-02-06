import { prismaClient } from "../application/database.js";
import { validate } from "../helper/validate.js";
import {
  createPostValidation,
  updatePostValidation,
} from "../validation/post-validation.js";

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
  const user_id = request.decodedToken.user_id;
  let { is_public = "false" } = request.query;

  let publicQuery = {};

  let followingQuery = {};

  if (is_public == "true") {
    publicQuery = {
      is_public: true,
    };

    const results = await prismaClient.follow.findMany({
      where: {
        user_id_following: user_id,
      },
      select: {
        user_id_followed: true,
      },
    });
    let users_id_followed = [];

    results.forEach((result) => {
      users_id_followed.push(result.user_id_followed);
    });

    followingQuery = {
      user_id: {
        in: users_id_followed,
      },
    };
  } else {
    publicQuery = {
      is_public: false,
    };
  }
  return await prismaClient.post.findMany({
    where: {
      AND: [publicQuery, followingQuery],
    },
  });
};

export default {
  createPostService,
  updatePostService,
  deletePostService,
  getAllPostService,
};
