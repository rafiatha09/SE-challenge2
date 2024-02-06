import { prismaClient } from "../application/database.js";
import { validate } from "../helper/validate.js";
import {
  createUserProfileValidation,
  loginValidation,
  registerUserValidation,
  updateUserProfileValidation,
  userIdValidation,
} from "../validation/user-validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUserService = async (request) => {
  const user = validate(registerUserValidation, request.body);
  const count_user = await prismaClient.user.count({
    where: {
      OR: [
        {
          username: {
            equals: user.username,
            mode: "insensitive",
          },
        },
        {
          email: {
            equals: user.email,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  if (count_user > 0) {
    throw new ResponseError(400, "User already exists");
  }
  user.password = await bcrypt.hash(user.password, 10);
  return await prismaClient.user.create({
    data: user,
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
};

const loginService = async (request) => {
  const login_request = validate(loginValidation, request.body);
  const user = await prismaClient.user.findFirst({
    where: {
      username: {
        equals: login_request.username,
        mode: "insensitive",
      },
    },
    include: {
      role: true,
    },
  });

  if (!user) {
    throw new ResponseError(401, "Username or password is wrong!");
  }

  const is_password_valid = await bcrypt.compare(
    login_request.password,
    user.password
  );

  if (!is_password_valid) {
    throw new ResponseError(401, "Username or password is wrong!");
  }
  let jwtSecretKey = "dfdsfsfgfgfgfdddsfdsfdfdsdsfsdfds";
  const token = jwt.sign(
    {
      user_id: user.id,
      email: user.email,
    },
    jwtSecretKey,
    {
      expiresIn: "5h",
    }
  );
  return await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      token: token,
    },
    select: {
      id: true,
      username: true,
      email: true,
      token: true,
    },
  });
};

const createProfileUserService = async (request) => {
  const user_id = validate(userIdValidation, request.params.userId);
  const user_profile = validate(createUserProfileValidation, request.body);

  return await prismaClient.user.update({
    where: {
      id: user_id,
    },
    data: user_profile,
    select: {
      id: true,
      username: true,
      email: true,
      first_name: true,
      last_name: true,
      phone_num: true,
      birth_date: true,
      address: true,
    },
  });
};

const updateProfileUserService = async (request) => {
  const user_id = validate(userIdValidation, request.params.userId);
  const user_profile = validate(updateUserProfileValidation, request.body);

  return await prismaClient.user.update({
    where: {
      id: user_id,
    },
    data: user_profile,
    select: {
      id: true,
      username: true,
      email: true,
      first_name: true,
      last_name: true,
      phone_num: true,
      birth_date: true,
      address: true,
    },
  });
};

export default {
  registerUserService,
  loginService,
  createProfileUserService,
  updateProfileUserService,
};
