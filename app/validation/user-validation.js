import Joi from "joi";

const registerUserValidation = Joi.object({
    username: Joi.string().max(100).required(),
    password: Joi.string().max(100).required(),
    email: Joi.string().max(100).email().required(),
});

const createUserProfileValidation = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone_num: Joi.string().required(),
    birth_date: Joi.string().required(),
    address: Joi.string().required()
})

const updateUserProfileValidation = Joi.object({
    first_name: Joi.string().optional(),
    last_name: Joi.string().optional(),
    phone_num: Joi.string().optional(),
    birth_date: Joi.string().optional(),
    address: Joi.string().optional()
})

const loginValidation = Joi.object({
    username: Joi.string().max(100).required(),
    password: Joi.string().max(100).required(),
})

const userIdValidation = Joi.string().required();


export {
    registerUserValidation,
    createUserProfileValidation,
    updateUserProfileValidation,
    userIdValidation,
    loginValidation
}