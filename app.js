// Import modules and dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// console.log(process.env.S3_BUCKET);
const userRoutes = require('./routes/userRoutes')


const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("listening to port 3000");
});

app.get("/", (req, res) => {
  res.json({ message: "ehello" });
});

app.use("/user", userRoutes);
