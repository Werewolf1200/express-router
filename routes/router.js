import express from "express";
import { resolve } from "path";

const appRouter = express.Router();

appRouter.get("/", (req, res) => {
    res.sendFile(resolve("index.html"));
});

export default appRouter;