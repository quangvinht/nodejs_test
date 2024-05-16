import express, { Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello , This a test for nodejs ");
});

app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
