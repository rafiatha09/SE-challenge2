import express from "express";
import { jwtMiddleware } from "../middleware/jwt.js";

const restrictedRouter = new express.Router();
restrictedRouter.use(jwtMiddleware);


export { restrictedRouter };
