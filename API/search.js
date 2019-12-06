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
// searchType("scholarShip", (posts) => {console.log(posts.length)});
// for (let i=0; i<db.types.length; i++) {
//   searchType(db.types[i], (posts) => {console.log(db.types[i], ': ', posts.length)});
// }

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
// searchMajor("Business", (posts) => {console.log(posts.length)});
// for (let i=0; i<db.majors.length; i++) {
//   searchMajor(db.majors[i], (posts) => {console.log(db.majors[i], ': ', posts.length)});
// }

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
// seatchTitle("sect", (posts) => {console.log('hahahahaha:  ', posts.length, 'like: ', posts[0].id)});

// --------------------- for updating the passwords into hashed passwords --------------------- \\
// const x = async function(ps) {
//   var hashed = await bcryptjs.hash(ps, 10);
//   return hashed;
// };

// const ps = function(cb) {
//   db.General.find({}, (err, posts) => {
//     let result = [];
//     for (let i = 0; i < posts.length; i++) {
//       result.push(posts[i].password);
//     }
//     cb(result);
//   });
// };

// ps(pss => {
//   for (let i = 0; i < pss.length; i++) {
//     x(pss[i]).then(async pass => {
//       await db.General.findOneAndUpdate(
//         { password: pss[i] },
//         { password: pass },
//         { new: true, useFindAndModify: false }
//       );
//     });
//   }
// });

module.exports.searchType = searchType;
module.exports.searchMajor = searchMajor;
module.exports.seatchTitle = seatchTitle;
