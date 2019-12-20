const express = require("express");
const port = process.env.PORT || 3004;
const bodyParser = require("body-parser");
const CR = require("crypto");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressUploader = require("express-fileupload");
const passport = require("passport");
const GoogleConfig = require("./Routs/config");
const db = require("../DataBase/db");
const bcryptjs = require("bcryptjs");
var GoogleStrategy = require("passport-google-oauth2").Strategy;



const app = express();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }

app.use(cors());
app.use(cors({ origin: "http://192.168.68.110:19006" }));
app.use(expressUploader());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//--------------------------------------------------//
//--------serilayzing user and creating a ----------//
//--------cookie to return it back to our page------//
//--------------------------------------------------//
passport.serializeUser((user, done) => {
  // console.log("inside serializeUser", user);
  done(null, user.id);
});

//---------------------------------------------------//
//----------getting our user back from --------------//
//--------- our database to be taken by -------------//
//------------------- or websit ---------------------//
//---------------------------------------------------//
passport.deserializeUser((id, done) => {
  db.General.findOne({ id: id }).then(resultUser => {
    done(null, resultUser);
  });
});
//---------------------------------------------------------------//
//--------------using the strategy of google in express ---------//
//---------------------------------------------------------------//
passport.use(
  new GoogleStrategy(
    {
      clientID: GoogleConfig.GoogleConfig.clientID,
      clientSecret: GoogleConfig.GoogleConfig.clientSecret,
      callbackURL: GoogleConfig.GoogleConfig.callbackURL
      // passReqToCallback: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("inside the call back");
      console.log(profile.email);
      //----------------------------------------------------------------//
      //---------try to creat a hashed Password for the user -----------//
      //-----------------------------------------------------------------//

      // console.log("iside try ");
      bcryptjs.hash(profile.name + Date.now(), 10).then(hashed => {
        // console.log(hashed, "hashed");
        var dbUser = {};
        var hashedPassword = hashed;
        var GeneralUser = {};
        var UnhashedPassword =
          profile.email + profile.name.givenName + profile.name.familyName;
        db.General.findOne({ email: profile.emails[0].value }).then(user => {
          GeneralUser = user;
          //---------------------------------------------------------------//
          //---------------- if the user is not rigistered ----------------//
          //---------------------------------------------------------------//
          console.log(user, "user");
          if (user === null) {
            dbUser = {
              Name: profile.name.givenName + " " + profile.name.familyName,
              email: profile.emails[0].value,
              type: true,
              id: profile.id,
              password: hashedPassword
            };
            //----------------------------------------//
            //-------puting all valiable info --------//
            //----------- in our dataBase ------------//
            //----------------------------------------//
            db.General.create(dbUser).then(user => {
              console.log(user, "profile");
              var dbProfile = {
                gender: true,
                id: user.id,
                birthDay: Date.now,
                address: "",
                mobileNumber: "",
                major: "",
                educationLevel: "",
                avatar: profile.picture
              };
              db.User.create(dbProfile)
                .then(result => {
                  //----------------------------------------------------------//
                  //------reterning the result to the serlize function -------//
                  //----------------------------------------------------------//
                  done(GeneralUser);
                })
                .catch(error => {
                  console.log(error, "not don");
                });
            });
          } else {
            //----------------------------------------------------------//
            //------reterning the result to the serlize function -------//
            //----------------------------------------------------------//
            done(null, GeneralUser);
            console.log(" user is registered");
            //---------------------------------------------------------------//
            //----------------- if the user is rigistered -------------------//
            //---------------------------------------------------------------//
          }
        });
      });
    }
  )
);

app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

//------------- create the route server by redirecting to the routefolder -----------//
app.use(require("./Routs"));
// app.use(express.bodyParser());

//----------dont Write Your Routs here Write it inside the Rout Index.js------------//
app.post("*", (res, req) => {
  console.log("body: ", req.body);
  console.log("query: ", req.query);
});
//-----------------------the request to the main server route-----------------------//
app.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.sen("hiiiiiiiii");
});

//------------------------------- open the connection --------------------------------//
app.listen(port, async function() {
  try {
    // console.log(await CR.randomBytes(64).toString("hex"));
  } catch {}
  console.log(`listning on port ${port}`);
});
