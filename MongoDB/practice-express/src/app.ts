import express, { Request, Response, json } from "express";
import { MovieRouters } from "./modules/movie/movie.router";

const app = express();

app.use(json());

app.use("/api/movies", MovieRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});
export default app;
