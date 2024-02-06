import Joi from "joi";

const createPostValidation = Joi.object({
    type: Joi.string().required(),
    title: Joi.string().required(),
    created_at: Joi.string().required(),
    is_public: Joi.boolean().required(),
    content: Joi.string().required()
})

const updatePostValidation = Joi.object({
    type: Joi.string().optional(),
    title: Joi.string().optional(),
    created_at: Joi.string().optional(),
    is_public: Joi.boolean().optional(),
    content: Joi.string().optional()
})

const postIdValidation = Joi.string().required();

export {
    createPostValidation,
    updatePostValidation,
    postIdValidation
}