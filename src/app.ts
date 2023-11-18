require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import express from "express";
export const app = express();
interface MyCustomData {
  message: string;
  success: boolean;
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

app.get(
  "/test",
  (req: Request, res: Response<MyCustomData>, next: NextFunction) => {
    const responseData: MyCustomData = {
      success: true,
      message: "Hello, TypeScript with Express!",
    };
    res.status(200).json(responseData);
  }
);

// unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});
