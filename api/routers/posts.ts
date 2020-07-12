import { Router } from 'express';

const postRouter = Router();

postRouter.get('/', (req, res) => {
    return res.json('post');
})

export default postRouter;