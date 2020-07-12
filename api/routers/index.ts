import userRouter from "./user";
import postRouter from "./posts";
import { Router } from 'express';

const apiRouter = Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/post', postRouter);

export default apiRouter;

