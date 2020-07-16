import { Router, Request, Response } from 'express';
import AuthorService from "../services/author";

const authorRouter = Router();

authorRouter.get('/', async (req: Request, res: Response) => {
    const authorList = await AuthorService.authorList();
    if (!authorList.length) {
        return res.status(204).json(authorList);
    }
    return res.status(200).json(authorList);
})

authorRouter.post('/', async (req: Request, res: Response) => {
    try {
        const newAuthor = await AuthorService.createAuthor(req.body);
        return res.status(200).json(newAuthor);
    } catch (e) {
        return res.status(500).json(e);
    }
})

authorRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const author = await AuthorService.getAuthorById(Number(id));

        if (!author) {
            return res.status(204).json(author);
        }
        return res.status(200).json(author);
    } catch (e) {
        return res.status(500).json(e);
    }
})

export default authorRouter;