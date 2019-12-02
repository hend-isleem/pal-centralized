const express = require("express");
const router = express.Router();

router.get("/user/signIn", (req, res, next) => {
  res.send("im inside the router");
});

module.exports = router;
