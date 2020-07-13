import userRouter from "./user";
import postRouter from "./posts";
import { Router, Request, Response } from "express";
import { ne } from "sequelize/types/lib/operators";

const apiRouter = Router();
apiRouter.get("/", (req: Request, res: Response, next) => {
  return res.render("info", {
    title: "Creatiive. Task.",
    message: "Info for API V1",
  });
  next();
});
apiRouter.use("/user", userRouter);
apiRouter.use("/post", postRouter);

export default apiRouter;
