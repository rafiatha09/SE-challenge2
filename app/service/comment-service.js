import { prismaClient } from "../application/database";
import { validate } from "../helper/validate";
import { createCommentValidation } from "../validation/comment-validation";

const createCommentService = async (request) => {
  const user_id = request.decodedToken.user_id;
  const comment = validate(createCommentValidation, request.body);
  comment.user_id = user_id;
  return await prismaClient.comment.create({
    data: comment,
    select: {
      id: true,
      post_id: true,
      content: true,
      user_id: true,
    },
  });
};

export default {
  createCommentService,
};
