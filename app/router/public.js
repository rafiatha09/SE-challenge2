import express from "express";
import userController from "../controller/user-controller.js";

const publicRouter = new express.Router();
publicRouter.post("/v1/api/login", userController.loginController);
publicRouter.post("/v1/api/register", userController.registerUserController);

export { publicRouter };