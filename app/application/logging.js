import winston from "winston";
import { prismaClient } from "./database.js";

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [new winston.transports.Console({})],
});

prismaClient.$use(async (params, next) => {
    const before = Date.now();

    const result = await next(params);

    const after = Date.now();
    console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
    return result;
});


export function logHttpRequest(req, res, next) {
    const start = Date.now();
    console.log(`Starting ${req.method} ${req.originalUrl}`);

    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(
            `Completed ${req.method} ${req.originalUrl} in ${duration}ms`
        );
        console.log(" ");
    });

    next();
}

