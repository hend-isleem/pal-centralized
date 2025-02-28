let db = require("../DataBase/db.js");
const bcryptjs = require("bcryptjs");

// --------------------- searching by type --------------------- \\
const searchType = function(type, cb) {
  db.Post.find({ type: type }, function(err, posts) {
    if (err) {
      console.log("error in finding posts.");
    } else {
      cb(posts);
    }
  });
};

const majors = [
  "Achitecture",
  "Art",
  "Business",
  "Media",
  "Computer",
  "Science",
  "Medicine",
  "Languages",
  "Law",
  "Philosophy",
  "Political",
  "Tourisim",
  "Sports",
  "History",
  "Engineerong",
  "IT",
  "Education",
  "Literature"
];
const types = ["scholarShip", "jop", "training"];

const EducationalLevel = [
  "High school diploma or equivalent",
  "High school diploma or equivalent",
  "	Bachelor's degree",
  "Master's degree",
  "Doctoral degree"
];

const seatchTitleArr = function(posts, str) {
  let result = [];
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].title.includes(str)) {
      result.push(posts[i]);
    }
  }
  return result;
};

// --------------------- searching by majors --------------------- \\

const searchMajor = function(major, cb) {
  db.Post.find({ major: major }, function(err, posts) {
    if (err) {
      console.log("error in finding posts.");
    } else {
      cb(posts);
    }
  });
};

// --------------------- searching by title --------------------- \\
const seatchTitle = function(str, cb) {
  db.Post.find({}, (err, posts) => {
    let result = [];
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].title.includes(str)) {
        result.push(posts[i]);
      }
    }
    cb(result);
  });
};

// --------------------- getFollowersEmails(the actual users's emails) of a company --------------------- \\
const getFollowersE = function(compId, cb) {
  db.User.find({}, async (err, users) => {
    let result = "";
    for (let i = 0; i < users.length; i++) {
      if (users[i].followingList.includes(compId)) {
        await db.General.find({}, (err, data) => {
          for (let j = 0; j < data.length; j++) {
            if (data[j].id === users[i].id) {
              result += data[j].email + " , ";
            }
          }
          // cb(result);
        });
      }
    }
    cb(result.slice(0, -2));
  });
};

// --------------------- searching byAll --------------------- \\

// if(keys.)

const search = function(type, major, cb, str) {
  db.Post.find({ major: major, type: type }, function(err, posts) {
    if (err) {
      console.log("error in finding posts. >> ", err);
    } else {
      if (str) {
        let result = [];
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].title.includes(str)) {
            result.push(posts[i]);
          }
        }
        cb(result);
      } else {
        cb(posts);
      }
    }
  });
};

// ------------------------- adding the link to the post schema
// const haha = async function() {
//   for (let i = 1 ; i <= 50; i++) {
//     await db.Post.findOneAndUpdate(
//       {id: i},  //filter
//       {link: "https://www.google.com/"}, //data to update
//       { //options
//         returnNewDocument: true,
//         new: true,
//         strict: false
//       }
//     )
//     console.log("hoho ", i)
//   }
// }
// haha();

// ------------------------- adding the company name to the post schema
// const haha = async function() {
//   await db.Post.find({}, (err, posts) => {
//     if (err) {
//       console.log("an err in fetching posts")
//     } else {
//       posts.forEach(async (post)=> {
//         let comp = post.comId;
//         await getName(comp, async (name) => {
//           await db.Post.findOneAndUpdate(
//             {id: post.id},  //filter
//             {compName: name}, //data to update
//             { //options
//               returnNewDocument: true,
//               new: true,
//               strict: false
//             }
//           )
//           console.log("updated");
//         });
//       })
//     }
//   });
// }
// haha();

// const getName = async function(comId, cb) {
//   await db.General.findOne({ id: comId}, (err, res) => {
//     if (err) {
//       console.log("eroor in finding a company title ", err);
//     } else {
//       cb(res.Name);
//     }
//   })
// }
// getName(4, (res) => {console.log(res)});

module.exports.searchType = searchType;
module.exports.seatchTitleArr = seatchTitleArr;
module.exports.searchMajor = searchMajor;
module.exports.seatchTitle = seatchTitle;
module.exports.getFollowersE = getFollowersE;
module.exports.search = search;
module.exports.majors = majors;
module.exports.types = types;
module.exports.EducationalLevel = EducationalLevel;
