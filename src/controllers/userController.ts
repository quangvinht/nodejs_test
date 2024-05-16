import { Request, Response } from "express";
import { User } from "../models/user";

let users: User[] = [];

export const getUsers = (req: Request, res: Response): void => {
  res.json(users);
};

export const getUserByUsername = (req: Request, res: Response): void => {
  const { username } = req.params;
  const user = users.find((user) => user.username === username);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

export const createUser = (req: Request, res: Response): void => {
  const newUser: User = req.body;

  const user = users.find((user: User) => user.username === newUser.username);

  if (!user) {
    res.status(409).json({ message: "User already exists !" });
  }

  users.push(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response): void => {
  const { username } = req.params;
  const updatedUser: User = req.body;
  const userIndex = users.findIndex((user) => user.username === username);
  if (userIndex !== -1) {
    users[userIndex] = updatedUser;
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const deleteUser = (req: Request, res: Response): void => {
  const { username } = req.params;
  const updatedUsers = users.filter((user) => user.username !== username);
  if (updatedUsers.length !== users.length) {
    users = updatedUsers;
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
