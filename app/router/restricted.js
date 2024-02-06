import express from "express";
import { jwtMiddleware } from "../middleware/jwt.js";
import userController from "../controller/user-controller.js";
import postController from "../controller/post-controller.js";
import followController from "../controller/follow-controller.js";
import commentController from "../controller/comment-controller.js";

const restrictedRouter = new express.Router();
restrictedRouter.use(jwtMiddleware);
restrictedRouter.post("/v1/api/create-profile/:userId", userController.createProfileUserController);
restrictedRouter.put("/v1/api/update-profile/:userId", userController.updateProfileUserController);
restrictedRouter.post("/v1/api/create-post", postController.createPostController);
restrictedRouter.put("/v1/api/update-post/:postId", postController.updatePostController);
restrictedRouter.delete("/v1/api/delete-post/:postId", postController.deletePostController);
restrictedRouter.post("/v1/api/create-follow", followController.createFollowController);
restrictedRouter.post("/v1/api/create-comment", commentController.createCommentController);
restrictedRouter.get("/v1/api/posts", postController.getAllPostController);





export { restrictedRouter };
