import { buildResponse } from "../helper/response.js";
import postService from "../service/post-service.js";

const createPostController = async (request, response, next) => {
  try {
    const result = postService.createPostService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};

const updatePostController = async (request, response, next) => {
  try {
    const result = postService.updatePostService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};
const deletePostController = async (request, response, next) => {
  try {
    const result = postService.deletePostService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};

export default {
    createPostController,
    updatePostController,
    deletePostController
}
