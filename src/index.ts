import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "./models/user";
import userRouter from "./routes/userRoute";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello , This a test for nodejsss ");
});

app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
