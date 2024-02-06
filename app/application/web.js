import express from "express";
// import { publicRouter } from "../route/public-api.js";
// import { errorMiddleware } from "../middleware/error-middleware.js";
// import { restrictedRouter } from "../route/restricted-api.js";
import cors from 'cors';

export const web = express();
web.use(express.json({ limit: "300mb" }));
web.use(express.urlencoded({ limit: "300mb", extended: true }));
web.get("/", (req, res) => {
    res.send("Hello !");
});

web.use(cors({
    origin: '*'
}));


// web.use(publicRouter);
// web.use(restrictedRouter);

// web.use(errorMiddleware);
