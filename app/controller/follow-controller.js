import { buildResponse } from "../helper/response.js";
import followService from "../service/follow-service.js";

const createFollowController = async (request, response, next) => {
  try {
    const result = await followService.createFollowService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};

export default {
    createFollowController
}