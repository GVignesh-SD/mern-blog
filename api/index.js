import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => {
    console.log("There is an error connecting to MongoDB");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
