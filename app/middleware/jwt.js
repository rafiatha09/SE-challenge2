import jwt from "jsonwebtoken";

const jwtMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            res.status(401)
                .json({
                    message: "Unauthorized",
                })
                .end();
        } else {
            req.decodedToken = jwt.verify(
                token,
                "dfdsfsfgfgfgfdddsfdsfdfdsdsfsdfds"
            );
            next();
        }
    } catch (error) {
        res.status(401)
            .json({
                message: "Unauthorized"
            })
            .end();
    }
};

export { jwtMiddleware };
