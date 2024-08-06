import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { postLink, getSlug } from "./controllers/link.js";


const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

// connect mongoDB

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URL);

  if (connect) {
    console.log("mongoDB connected ");
  } else {
    console.log("connection failed");
  }
};
connectDB();

app.get("/", (req, res) => {
  res.send("Server is Healthy");
});

app.post("/link", postLink);

app.get("/:slug", getSlug);

app.listen(PORT, () => {
  console.log(`Your server is running on PORT ${PORT}`);
});
