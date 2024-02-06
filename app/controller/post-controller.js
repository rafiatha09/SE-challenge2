import { buildResponse } from "../helper/response.js";
import postService from "../service/post-service.js";

const createPostController = async (request, response, next) => {
  try {
    const result = await postService.createPostService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};

const updatePostController = async (request, response, next) => {
  try {
    const result = await postService.updatePostService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};
const deletePostController = async (request, response, next) => {
  try {
    const result = await postService.deletePostService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};
const getAllPostController= async (request, response, next) => {
  try {
    const result = await postService.getAllPostService(request);
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
    deletePostController,
    getAllPostController
}
