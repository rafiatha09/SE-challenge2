import { buildResponse } from "../helper/response.js";

class ResponseError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}

const errorMiddleware = async (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }
    if (err instanceof ResponseError) {
        res.status(err.status)
            .json(buildResponse(false, err.status, "Failed", null, err.message))
            .end();
    } else {
        res.status(200)
            .json({
                errors: err.message,
            })
            .end();
    }
};

export { errorMiddleware, ResponseError };
