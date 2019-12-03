const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../Auth/Auth");
const cookieParser = require("cookie-parser");
const { check, validationResult } = require("express-validator");

router.post(
  "/user/signUp",
  [check("email").isEmail(), check("password").isLength({ min: 6 })],
  async (req, res, next) => {}
);

router.post("/user/signIn", async (req, res, next) => {
  console.log("insde the post");

  // -----------------------------------------//
  // ----here we get the user to database ----//
  //------------------------------------------//
  const DataBaseUser = {
    username: "req.body.username",
    passowrd: "req.body.passowrd"
  };

  //--------------------------------//
  //--- this is the request user----//
  //--------------------------------//

  const user2 = {
    username: "req.body.username",
    passowrd: "req.body.passowrd"
  };

  //--------------------------------//
  //--- check if the user Exist ----//
  //--------------------------------//
  if (DataBaseUser === null) {
    console.log("inside the finde method from data base if he did not find it");
    res.status(400).send("cannot find the user");
  }

  //--------------------------------//
  //--- check Password Matching ----//
  //--------------------------------//

  try {
    const hashpassword = await bcryptjs.hash("req.body.passowrd", 10);

    if (await bcryptjs.compare(user2.passowrd, hashpassword)) {
      //--------------------------------//
      //--- the is Password Matching ---//
      //--------------------------------//
      console.log("insi the compar");
      res.status(201).send("Success");

      //--------------------------------//
      //--------create a Token for user----//
      //------------------------------//
      const acsessToken = Auth.generateAccessToken(DataBaseUser);
      res.json({ acsessToken });
    } else {
      //--------------------------------//
      //-- the is not Password Matching-//
      //--------------------------------//
      console.log("insi the compar2");
      res.status(401).send("check you passwors or user name");
    }
  } catch {
    //--------------------------------//
    //-An Error Accurede while cheking-//
    //--------------------------------//
    console.log(req.body.data, "passsword");
    res.status(500).send();
  }
});

module.exports = router;
