import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as cron from "node-cron";
import postRoutes from "./routes/posts.js";
import { MONGODB_USERNAME } from "./credentials/credentials.js";
import { MONGODB_PASSWORD } from "./credentials/credentials.js";
import { updateCafes } from "./controllers/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", postRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to ILCoffee API");
});

cron.schedule("0 0 */7 * *", () => {
  updateCafes();
});

const CONNECTION_URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.weflnit.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
