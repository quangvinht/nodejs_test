import { Router } from "express";
import {
  getUsers,
  getUserByUsername,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.get("/users/search", getUserByUsername);
userRouter.post("/users", createUser);
userRouter.put("/users/:username", updateUser);
userRouter.delete("/users/:username", deleteUser);

export default userRouter;
