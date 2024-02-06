import { buildResponse } from "../helper/response.js";
import commentService from "../service/comment-service.js";

const createCommentController = async (request, response, next) => {
  try {
    const result = commentService.createCommentService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};

export default {
  createCommentController,
};
