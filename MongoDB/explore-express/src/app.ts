import express, { NextFunction, Request, Response } from "express";

const app = express();

// parsers
app.use(express.json());
app.use(express.text());

// routers
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

userRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      status: 200,
      message: "Get Data Successfully",
    });
    // res.send(hello);
  } catch (error) {
    next(error);
  }
});

courseRouter.post("/create-post/", (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: "Post Created Successfully",
    data: req.body,
  });
});

app.all("*", (req: Request, res: Response) => {
  res.json({ message: "error" });
});

//global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    message: "Something went wrong",
  });
});

export default app;
