import { Router, Request, Response } from 'express';
import BookService from "../services/book";

const bookRouter = Router();

bookRouter.get('/', async (req: Request, res: Response) => {
    console.log('--->',req);
    const bookList = await BookService.bookList();
    if (!bookList.length) {
        return res.status(204).json(bookList);
    }
    return res.status(200).json(bookList);
})

bookRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const book = await BookService.getBookById(Number(id));
        if (!book) {
            return res.status(204).json(book);
        }
        return res.status(200).json(book);
    } catch (e) {

    }
})

bookRouter.post('/', async (req: Request, res: Response) => {
    try {
        const newBook = await BookService.createBook(req.body);
        return res.status(200).json(newBook);
    } catch (e) {
        return res.status(500).json(e);
    }
});

bookRouter.patch('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const book = await BookService.updateBook(Number(id), body);
        return res.json(book);
    } catch (e) {
        return res.status(500).json(e);
    }
})

export default bookRouter;