import { Router, Request, Response } from 'express';
import PostService from "../services/post";

const postRouter = Router();

postRouter.get('/', async (req, res) => {
    const postList = await PostService.postList();
    if (!postList.length) {
        return res.status(204).json(postList);
    }
    return res.status(200).json(postList);
})

postRouter.post('/', async (req: Request, res: Response) => {
    try {
        const newPost = await PostService.createPost(req.body);
        return res.status(200).json(newPost);
    } catch (e) {
        return res.status(500).json(e);
    }
});

export default postRouter;