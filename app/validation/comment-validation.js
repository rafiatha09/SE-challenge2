import Joi from "joi";


const createCommentValidation = Joi.object({
    content: Joi.string().required(),
    post_id: Joi.string().required(),
    user_id: Joi.string().required()
})

const updateCommentValidation = Joi.object({
    content: Joi.string().optional(),
    post_id: Joi.string().optional(),
    user_id: Joi.string().optional()
})

const commentIdValidation = Joi.string().required();

export {
    createCommentValidation,
    updateCommentValidation,
    commentIdValidation
}