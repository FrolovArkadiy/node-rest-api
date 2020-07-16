import userRouter from "./user";
import bookRouter from "./book";
import authorRouter from "./author";
import { Router, Request, Response } from "express";

const apiRouter = Router();
apiRouter.get("/", (req: Request, res: Response, next) => {
  return res.render("info", {
    title: "Creatiive. 2020",
    message: "Info for Task",
  });
  next();
});
apiRouter.use("/user", userRouter);
apiRouter.use("/book", bookRouter);
apiRouter.use("/author", authorRouter);

export default apiRouter;
