let db = require("../DataBase/db.js");
const bcryptjs = require("bcryptjs");
const fetch = require("node-fetch");

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

///////////////////  xx is an array of 3 posts for testing only
// let xx = [
//   {
//     id: 12,
//     comId: 34,
//     title: 'Consectetur eos repellendus et vel vel.',
//     description: 'Nemo reprehenderit rerum quibusdam nulla. Iste est sed laboriosam a beatae. Tempora et autem hic.',
//     deadLine: '2020-05-05T17:15:01.970Z',
//     major: 'Education',
//     logo: 'http://lorempixel.com/640/480/business',
//     type: 'jop',
//     archived: true,
//     read: false,
//     link: 'https://www.google.com/'
//   },
//   {
//     id: 24,
//     comId: 14,
//     title: 'Temporibus pariatur omnis libero consectetur voluptates voluptatem iure.',
//     description: 'Voluptatibus pariatur repellendus excepturi magnam odio inventore in id nulla. Rerum doloribus eaque veniam beatae sint. Esse velit ut nihilducimus iste ullam vel. Sint error aut omnis blanditiis. Voluptatem eius dignissimos sit reiciendis minus officiis et. Totam quam perspiciatis ipsum iure deleniti et at et.',
//     deadLine: '2020-06-08T08:37:44.885Z',
//     major: 'Media',
//     logo: 'http://lorempixel.com/640/480/business',
//     type: 'training',
//     archived: true,
//     read: false,
//     link: 'https://www.google.com/'
//   },
//   {
//     id: 34,
//     comId: 35,
//     title: 'Eveniet molestias quo consectetur at aliquam iste.',
//     description: 'Rerum reiciendis vel est quod dolores qui itaque eum. Quas tenetur quasi aut incidunt sapiente ad dolores. Quis ut minus cum blanditiis dignissimos.',
//     deadLine: '2020-09-16T16:02:56.817Z',
//     major: 'Medicine',
//     logo: 'http://lorempixel.com/640/480/business',
//     type: 'scholarShip',
//     archived: true,
//     read: false,
//     link: 'https://www.google.com/'
//   }
// ];

const seatchTitleArr = function(posts, str) {
  let result = [];
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].title.includes(str)) {
      result.push(posts[i]);
    }
  }
  return result;
};
// console.log(seatchTitleArr(xx, "em")); xx is an array of 3 posts for testing only

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
// getFollowersE(5, (emails) => {console.log('hahahahaha:  ', emails)});

// const getFollowersE = function(compId, cb) {
//   db.User.find({}, (err, users) => {
//     // let result = '';
//     for (let i = 0; i < users.length; i++) {
//       if (users[i].followingList.includes(compId)) {
//         db.General.find({id: users[i].id}, (err, data) => {
//           console.log('mail: ',data[0].email);
//           // cb(data[0].email);
//         });
//       }
//     }
//     // cb(result);
//   });
// };
// getFollowersE(5, (emails) => {console.log('hahahahaha:  ', emails)});

// --------------------- searching byAll --------------------- \\

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
// search("jop", "Business", (posts) => {console.log(posts.length)}, "Rer");

// --------------------- for updating the passwords into hashed passwords --------------------- \\
// const x = async function(ps) {
//   var hashed = await bcryptjs.hash(ps, 10);
//   return hashed;
// };
// // x('sleepy').then((ps) => {console.log(ps)});

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
//       console.log(pass)
//     });
//   }
// });

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

// --------------------- for updating theimages from an api --------------------- \\

//  Images from Unsplash Api

// function getUnsplashAPI() {
//   let clientId =
//     '31b27323229fa7a779c5a1a397f14665b5f8741c4487e6a915460ce741dcfa03';
//   let q = 'work';
//   let url = `https://api.unsplash.com/search/photos/?query=${q}&per_page=100&client_id=${clientId}`;
//   fetch(url)
//     .then((data) => {
//       return data.json();
//     })
//     .then(async (data) => {
//       console.log( data.results.length);
//       for (let i = 31 ; i <= 50; i++) {
//         await db.Post.findOneAndUpdate(
//           {id: i}, 
//           {logo: data.results[i-30].urls.regular}
//         )
//         console.log("hoho ", i)
//       }
//     });
// }
// getUnsplashAPI();


module.exports.searchType = searchType;
module.exports.seatchTitleArr = seatchTitleArr;

module.exports.searchMajor = searchMajor;
module.exports.seatchTitle = seatchTitle;
module.exports.getFollowersE = getFollowersE;
module.exports.search = search;
module.exports.seatchTitleArr = seatchTitleArr;
