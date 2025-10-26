import express, { Request, Response } from "express";
import ezServe from "ez-serve";
import "dotenv/config";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

ezServe(app, port);
