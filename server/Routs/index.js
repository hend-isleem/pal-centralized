const express = require("express");
const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("im inside the router");
});

module.exports = router;
