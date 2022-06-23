// EXPRESS ROUTER

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "from routes" });
});


module.exports = router;