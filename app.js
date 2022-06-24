// Import modules and dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// console.log(process.env.S3_BUCKET);

//Routes
const userRoutes = require("./routes/userRoutes");
const contactsRoutes = require("./routes/contactsRoutes");

//Connect to MongoDB Compass
const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(DB_CONNECT, () => {
  app.listen(8000, () => {
    console.log("listening to port 8000");
  });
  console.log("Connected to DB");
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

app.use("/contacts", contactsRoutes);