let db = require("../DataBase/db.js");

const searchType = function(type, cb) {
  db.Post.find({type: type}, function(err, posts) {
    if (err) {
      console.log('error in finding posts.')
    } else {
      cb(posts);
    }
  });
}
// searchType("scholarShip", (posts) => {console.log(posts.length)});
// for (let i=0; i<db.types.length; i++) {
//   searchType(db.types[i], (posts) => {console.log(db.types[i], ': ', posts.length)});
// }



const searchMajor = function(major, cb) {
  db.Post.find({major: major}, function(err, posts) {
    if (err) {
      console.log('error in finding posts.')
    } else {
      cb(posts);
    }
  });
}
// searchMajor("Business", (posts) => {console.log(posts.length)});
// for (let i=0; i<db.majors.length; i++) {
//   searchMajor(db.majors[i], (posts) => {console.log(db.majors[i], ': ', posts.length)});
// }


const seatchTitle = function(str, cb) {
  db.Post.find({}, (err, posts) => {
    let result = [];
    for (let i=0; i<posts.length; i++) {
      if (posts[i].title.includes(str)) {
        result.push(posts[i]);
      }
    }
    cb(result);
  })
}
// seatchTitle("sect", (posts) => {console.log('hahahahaha:  ', posts.length, 'like: ', posts[0].id)});


module.exports.searchType = searchType;
module.exports.searchMajor = searchMajor;
module.exports.seatchTitle = seatchTitle;