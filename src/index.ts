import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "./models/user";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello , This a test for nodejsss ");
});

app.post("/users", (req: Request, res: Response) => {
  const newUser: User = req.body;

  res.status(201).json(newUser);
});

// Read all users
app.get("/users", (req: Request, res: Response) => {
  res.status(200).json();
});

app.get("/users/:id", (req: Request, res: Response) => {
  const userId: string = req.params.id;

  res.status(200).json();
});

app.put("/users/:id", (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const updatedUser: User = req.body;

  res.status(200).json(updatedUser);
});

app.delete("/users/:id", (req: Request, res: Response) => {
  const userId: string = req.params.id;

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
