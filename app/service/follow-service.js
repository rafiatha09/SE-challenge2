import { prismaClient } from "../application/database.js";
import { validate } from "../helper/validate.js";
import { createFollowValidation } from "../validation/follow-validation.js";

const createFollowService = async (request) => {
  const user_id = request.decodedToken.user_id;
  const user_id_followed = validate(createFollowValidation, request.body);
  return await prismaClient.follow.create({
    data: {
      user_id_following: user_id,
      user_id_followed: user_id_followed.user_id_followed,
    },
    select: {
      id: true,
      user_id_followed: true,
      user_id_following: true,
    },
  });
};


export default {
    createFollowService
}