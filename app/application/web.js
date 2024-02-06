import express from "express";
import { publicRouter } from "../router/public.js";
import { errorMiddleware } from "../middleware/error.js";
import { restrictedRouter } from "../router/restricted.js";
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


web.use(publicRouter);
web.use(restrictedRouter);

web.use(errorMiddleware);
