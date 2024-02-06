import Joi from "joi";

const createFollowValidation = Joi.object({
    user_id_following: Joi.string().required(),
    user_id_followed: Joi.string().required()
});

const followIdValidation = Joi.string().required();

export {
    createFollowValidation,
    followIdValidation
}