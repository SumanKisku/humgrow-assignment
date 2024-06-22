import { Application, Request, Response } from "express"

import express from "express";
import cors from "cors";
import userRouter from "./routes/user"
import { connectDb, connectSession } from "./connections";

require("dotenv").config();

const app: Application = express();
const port = 3000;
const mongo_url = process.env.MONGO_URL as string;

app.use(cors());
app.use(express.json());

connectDb(mongo_url);
app.use(connectSession(mongo_url));

app.get("/", (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        message: "Hello world",
    })
})

app.use("/api/user", userRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})