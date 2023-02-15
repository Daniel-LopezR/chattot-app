import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mountRoutes from "./routes";

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors({origin: process.env.FRONT_URL, credentials: true}));
mountRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});