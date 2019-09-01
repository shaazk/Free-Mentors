import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";


dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", userRoutes);

export default app;
