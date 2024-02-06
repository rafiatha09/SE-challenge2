import { buildResponse } from "../helper/response.js";
import userService from "../service/user-service.js";

const loginController = async (request, response, next) => {
  try {
    const result = userService.loginService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};

const registerUserController = async (request, response, next) => {
  try {
    const result = userService.registerUserService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};

const createProfileUserController = async (request, response, next) => {
  try {
    const result = userService.createProfileUserService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};

const updateProfileUserController = async (request, response, next) => {
  try {
    const result = userService.updateProfileUserService(request);
    response
      .status(200)
      .json(buildResponse(true, 200, "Success", result, null));
  } catch (error) {
    next(error);
  }
};

export default {
  loginController,
  registerUserController,
  createProfileUserController,
  updateProfileUserController
};
