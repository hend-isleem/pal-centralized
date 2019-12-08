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

//-------------------------------------------##### get all Post Rout Nativ #####------------------------------------------------------------//
router.get("/articles", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  db.Post.find({}, (error, post) => {
    if (error) {
      res.status(500).send("an error accured while connecting to data");
    }
  }).then(post => {
    res.status(201).send(post);
  });
});

//--------------------------------------------#### get User Rout forNative #####------------------------------------------------------------//
router.get("/user", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  //------------------------------------------//
  //----------- getting data for one user ----//
  //------------------------------------------//
  db.General.find(req.query, (error, user) => {
    if (error) {
      //-----------------------------------------//
      //--------------if an error accures -------//
      //-----------return server error-----------//
      res.status().send(" an error accured retrivong data");
    }
  }).then(user => {
    //-------------------------------------------//
    //---- getting all info if its a company ----//
    //-------------------------------------------//
    if (user[0].type === true) {
      var info = {
        id: user[0]["id"],
        Name: user[0]["Name"],
        email: user[0]["email"]
      };
      db.Company.find({ id: user[0]["id"] }, (error, data) => {
        if (error) {
          res.status(500).send(" an error accured retrivong data");
        }

        //-------------------------------------------//
        //------ getting all  company proile --------//
        //-------------------------------------------//
        info["followersList"] = data[0]["followersList"];
        info["postsList"] = data[0]["postsList"];
        info["archiveList"] = data[0]["archiveList"];
        info["logo"] = data[0]["logo"];
        info["mobileNumber"] = data[0]["mobileNumber"];
        info["description"] = data[0]["description"];

        res.status(201).send({ user: [info] });
      });
    } else {
      //-------------------------------------------//
      //------ if type is a user get user nfo------//
      //-------------------------------------------//
      var info = {
        id: user[0]["id"],
        Name: user[0]["Name"],
        email: user[0]["email"]
      };
      db.User.find({ id: user[0]["id"] }, (error, data) => {
        if (error) {
          res.status(500).send(" an error accured retrivong data");
        }
        //-------------------------------------------//
        //------ getting  all  user   proile --------//
        //-------------------------------------------//

        info["birthDay"] = data[0]["birthDay"];
        info["address"] = data[0]["address"];
        info["mobileNumber"] = data[0]["mobileNumber"];
        info["logo"] = data[0]["avatar"];
        info["educationLevel"] = data[0]["educationLevel"];
        info["major"] = data[0]["major"];
        info["mobileNumber"] = data[0]["mobileNumber"];
        info["gender"] = data[0]["gender"];
        info["favoriteList"] = data[0]["favoriteList"];
        info["followingList"] = data[0]["followingList"];
        info["notificationList"] = data[0]["notificationList"];
        info["tags"] = data[0]["tags"];
        info["cv"] = data[0]["cv"];

        res.status(201).send({ user: [info] });
      });
    }
  });
});

//------------------------------------------##### signIn Section #####------------------------------------------------//

router.post("/user/signIn", async (req, res) => {
  console.log("email", req.body.email, req.body.passowrd, "password");

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  // -----------------------------------------//
  // ----here we get the user from database ----//
  //------------------------------------------//
  var user = {};
  await db.General.findOne({ email: req.body.email }, (error, user) => {
    if (error) {
      res
        .status(500)
        .send("an Error Accured While Proccessing Data,  Try Again Later");
    }
  }).then(async user2 => {
    // console.log(user, "user");
    user = user2;
  });

  //--------------------------------//
  //--- check if the user Exist ----//
  //--------------------------------//
  if (user === null) {
    console.log("User Is not Registered");
    return res.status(400).send("cannot find the user");
  } else {
    //--------------------------------//
    //--- check Password Matching ----//
    //--------------------------------//

    try {
      console.log(await bcryptjs.hash(req.body.passowrd, 10));
      await bcryptjs.compare(req.body.passowrd, user.password, function(
        err,
        isMatch
      ) {
        if (err) {
          console.log("err");
        } else {
          console.log(isMatch, "isMatch");
          //--------------------------------//
          //--- the is Password Matching ---//
          //--------------------------------//
          // res.status(201).send("Success")//

          console.log("insid the compar");

          //-------------------------------------//
          //--------create a Token for user------//
          //------------- if the user match------//
          if (isMatch) {
            console.log(user.Name, "name");
            console.log(user.email, "email");

            const acsessToken = Auth.generateAccessToken({
              email: user.email,
              name: user.Name
            });
            res.status(201).send({ acsessToken: acsessToken, user: user });
          } else {
            //--------------------------------//
            //-- the is not Password Matching-//
            //--------------------------------//
            console.log("inside the compar2");
            res.status(401).send("check you passwors or user name");
          }
        }
      });
    } catch {
      //--------------------------------//
      //-An Error Accurede while cheking-//
      //--------------------------------//
      console.log("catch");
    }
  }
  // console.log(DataBaseUser);

  //--------------------------------//
  //--- this is the request user----//
  //--------------------------------//
});

//------------------------------------------##### SignUp Section #####------------------------------------------------//
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
      return res
        .status(422)
        .json({ errors: errors.array() })
        .end();
    }

    const hashpassword = "";
    const id = Date().now();
    console.log(id, hashpassword);
    try {
      //-------------------------------//
      //----- hashing Password---------//
      //-------------------------------//
      hashpassword = await bcryptjs.hash(req.body.passowrd, 10);
      console.log(id, hashpassword);
      //// after Hasing we will Insert A new User to Users///////
    } catch {
      //--------------------------------//
      //-An Error Accurede while cheking-//
      //--------------------------------//
      console.log(req.body.data, "passsword");
      res
        .status(500)
        .send("An Error has Accured While Saving Data Plz Try Again")
        .end();
    }

    //--------------------------------------------------//
    //--saving User To DataBase with Hashed Password ---//
    //--------------------------------------------------//

    db.User.find({ email: req.body.email }, (error, user) => {
      if (error) {
        res.status(500).send();
      }
    }).then(user => {
      //-----------------------------------------------------//
      //--------if the user email exist ---------------------//
      //--------then tell it to sing up wit another mail-----//
      if (user !== null) {
        res.status(404).send("user email is already exist ");
      } else {
        db.General.save({
          Name: req.body.name,
          id: id,
          type: req.body.type,
          email: req.body.email,
          passowrd: hashpassword
        }).then(result => {
          //------------------------------------------//
          //--------- we need to  send the type ------//
          //--------- in the requet by choosing ------//
          //------------------------------------------//
          if (req.body.type === false) {
            db.User.save({
              email: req.body.email,
              Name: req.body.body.ame,
              id: id,
              gender: req.body.gender,
              birthDay: req.body.birthDay,
              address: req.body.address,
              mobileNumber: req.body.mobileNumber,
              major: req.body.major,
              educationLevel: req.body.educationLevel,
              avatar: req.body.ImageUrl
            }).then(result => {
              //-|------------------------------------------------//
              //-|--> do the saving Function and send result -----//
              //------------if user is saved generate a token ----//
              //--------------------------------------------------//

              //------------------------------------//
              //--------create a Token for user-----//
              //------------------------------------//
              const acsessToken = Auth.generateAccessToken({
                email: req.body.email,
                name: req.body.name
              });
              res.status(201).send({
                acsessToken: { email: req.body.email, Name: req.body.Name },
                user: {
                  name: req.name.Name,
                  id: id,
                  type: req.type,
                  email: req.body.email
                }
              });
              //-------------------------------------------//
              //-------------if user is not saved ---------//
              //------------return a 500 to server --------//
            });
          } else {
            //------------------------------------------//
            //---------if type is company (true) -------//
            //------------------------------------------//
            db.Company.save({
              email: req.body.email,
              Name: req.body.body.ame,
              id: id,
              description: req.body.description,
              logo: req.body.logo,
              twitterLink: req.body.twitterLink,
              linkedinLink: req.body.linkedinLink,
              otherLink: req.body.otherLink,
              mobileNumber: req.body.mobileNumber
            }).then(result => {
              //-|------------------------------------------------//
              //-|--> do the saving Function and send result -----//
              //------------if user is saved generate a token ----//
              //--------------------------------------------------//

              //------------------------------------//
              //--------create a Token for user-----//
              //------------------------------------//
              const acsessToken = Auth.generateAccessToken({
                email: req.body.email,
                name: req.body.name
              });
              res.status(201).send({
                acsessToken: { email: req.body.email, Name: req.body.Name },
                user: {
                  name: req.name.Name,
                  id: id,
                  type: req.type,
                  email: req.body.email
                }
              });
              //-------------------------------------------//
              //-------------if user is not saved ---------//
              //------------return a 500 to server --------//
              //-------------------------------------------//
            });
          }
        });
      }
    });
  }
);

module.exports = router;
