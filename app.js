// Import modules and dependencies
require("dotenv").config();
const express = require("express");
// console.log(process.env.S3_BUCKET);
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("listening to port 3000");

});

app.get("/", (req, res) => {
  res.json({ message: "ehello" });
});
