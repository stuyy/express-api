import { config } from "dotenv";
import express from "express";

const app = express();

config();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

export default app;
