import { Router, Request, Response } from 'express';
import UserService from "../services/user";

const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {
    const { count, rows } = await UserService.userList();
    if (!count) {
        return res.status(204).json({

        });
    }
    return res.status(200).json({
        count,
        users: rows
    });
})

userRouter.post('/', async (req: Request, res: Response) => {
    try {
        const newUser = await UserService.createUser(req.body);
        return res.status(200).json(newUser);
    } catch (e) {
        return res.status(500).json(e);
    }
})

export default userRouter;