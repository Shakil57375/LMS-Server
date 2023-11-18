require("dotenv").config();
import { Request, Response } from "express";
import express from "express";
export const app = express();
interface MyCustomData {
  message: string;
}
import cors from "cors";
import cookieParser from "cookie-parser";

// body parser

app.use(express.json({ limit: "50mb" }));

// cookieParser

// cors => cors origin resource sharing
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// testing api

app.get("/test", (req: Request, res: Response<MyCustomData>) => {
  const responseData: MyCustomData = {
    message: "Hello, TypeScript with Express!",
  };

  res.json(responseData);
});
