import { Router, Request, Response } from "express";
import UserService from "../services/user";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const userList = await UserService.userList();
    if (!userList.rows.length) {
      return res.status(204).json(userList);
    }
    return res.status(200).json(userList);
  } catch (e) {
    return res.status(500).json(e);
  }
});

userRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await UserService.getUserById(Number(id));
    if (!user) {
      return res.status(204).json(user);
    }
    return res.json(user)
  } catch (e) {
    return res.status(500).json(e);
  }

})

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newUser = await UserService.createUser(req.body);
    return res.status(200).json(newUser);
  } catch (e) {
    return res.status(500).json(e);
  }
});

userRouter.patch('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const user = await UserService.updateUser(Number(id), body);
    return res.json(user)
  } catch (e) {
    return res.status(500).json(e);
  }
})

export default userRouter;
