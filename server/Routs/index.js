const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const db = require("../../DataBase/db");
const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const Auth = require("../Auth/Auth");
const { check, validationResult } = require("express-validator");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post(
  "/user/signUp",
  [check("email").isEmail(), check("password").isLength({ min: 6 })],
  async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    const errors = validationResult(req);

    //------------------------------------------------------//
    //------if the email or password is as we want this-----//
    //------is the error that will be shown-----------------//
    //----------- --------{---------------------------------//
    //---------------------- "errors": [{-------------------//
    //---------------------- "location": "body",------------//
    //------------------------ "msg": "Invalid value",------//
    //-------------------------  "param": "username"--------//
    //---------------------- }]-----------------------------//
    //---------------------}--------------------------------//

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const hashpassword = "";
    try {
      //-------------------------------//
      //----- hashing Password---------//
      //--------------------------------//
      hashpassword = await bcryptjs.hash(req.body.passowrd, 10);
    } catch {
      //--------------------------------//
      //-An Error Accurede while cheking-//
      //--------------------------------//
      console.log(req.body.data, "passsword");
      res.status(500).send();
    }

    //--------------------------------------------------//
    //--saving User To DataBase with Hashed Password ---//
    //--------------------------------------------------//

    var DataBaseUser;
    db.User.find({ password: req.body.passowrd }, (error, user) => {
      if (error) {
        res.status(500).send();
      }
    }).then(user => {
      DataBaseUser = user;
      //------------------------------------//
      //--------if the user email exist -----//
      //--------then tell it to sing up wit another mail-----//
      if (DataBaseUser !== null) {
        res.status(404).send("user email is already exist ");
      }
    });
    db.save(DataBaseUser);
    //-|------------------------------------------------//
    //-|--> do the saving Function and send result -----//
    //------------if user is saved generate a token ----//
    //--------------------------------------------------//

    //------------------------------------//
    //--------create a Token for user-----//
    //------------------------------------//
    const acsessToken = Auth.generateAccessToken(DataBaseUser);
    res.json({ acsessToken });

    //-------------------------------------------//
    //-------------if user is not saved ---------//
    //------------return a 500 to server --------//
  }
);

router.post("/user/signIn", async (req, res) => {
  console.log(req.body, "jjjjj");

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  // -----------------------------------------//
  // ----here we get the user from database ----//
  //------------------------------------------//
  const DataBaseUser = {
    email: "",
    passowrd: ""
  };
  db.General.find(
    { email: req.body.email, passowrd: req.body.password },
    (error, user) => {
      if (error) {
        console.log("error");
      }
    }
  ).then(user => {
    DataBaseUser = {
      email: user.email,
      passowrd: user.password
    };
  });

  console.log(DataBaseUser);

  //--------------------------------//
  //--- this is the request user----//
  //--------------------------------//

  const user2 = {
    email: req.body.email,
    passowrd: req.body.password
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
    const hashpassword = await bcryptjs.hash(req.body.passowrd, 10);
    console.log(hashpassword);
    if (await bcryptjs.compare(DataBaseUser.passowrd, hashpassword)) {
      //--------------------------------//
      //--- the is Password Matching ---//
      //--------------------------------//
      // res.status(201).send("Success")//

      console.log("insi the compar");

      //-------------------------------------//
      //--------create a Token for user------//
      //------------- if the user match------//
      const acsessToken = Auth.generateAccessToken(DataBaseUser);
      res.status(201).json({ acsessToken });
    } else {
      //--------------------------------//
      //-- the is not Password Matching-//
      //--------------------------------//
      console.log("inside the compar2");
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
