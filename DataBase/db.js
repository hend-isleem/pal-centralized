const faker = require("faker"); // dummy Data
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const config = require("./config/keys.js");

const uri = process.env.mongoURI || config.mongoURI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  // .then(() => console.log('MongoDB Connected...'))
  .catch(error => console.log("error"));

const { connection } = mongoose;

connection.once("open", () => {
  console.log("connected");
});

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
const addresses = [
  "Jerusalem",
  "Safed",
  "Haifa",
  "Bisan",
  "Akka",
  "Nablus",
  "Tulkarm",
  "Qalqilya",
  "Caesarea",
  "Ramallah",
  "Al-Bireh",
  "Al-Roll",
  "Jaffa",
  "Jericho",
  "Bethlehem",
  "Hebron",
  "Ashkelon",
  "Khan Younis",
  "Rafah",
  "Beersheba"
];
const eduLevels = [
  "high school",
  "diploma",
  "bachelor's degree",
  "master's degree",
  "doctoral degree"
];

//--------------General schema -----------
const GeneralSchema = Schema({
  id: {
    type: Number,
    required: true
  },
  Name: String,
  password: String,
  email: String,
  type: Boolean
});

//---------------Creating a model for General schema----------------
const General = mongoose.model("general", GeneralSchema);

//--------------User schema -----------
const UserSchema = Schema({
  id: {
    type: Number,
    required: true
  },
  gender: Boolean,
  birthDay: Date,
  address: String,
  mobileNumber: String,
  major: String,
  educationLevel: String,
  avatar: String,
  tags: [String],
  cv: String,
  favoriteList: [Number],
  followingList: [Number],
  notificationList: [Number]
});

//---------------Creating a model for user schema----------------
const User = mongoose.model("user", UserSchema);

//--------------Company schema-----------
const CompanySchema = Schema({
  id: {
    type: Number,
    required: true
  },

  description: String,
  logo: String,
  twitterLink: String,
  linkedinLink: String,
  otherLink: String,
  mobileNumber: String,
  archiveList: [Number],
  followersList: [Number],
  postsList: [Number]
});

//---------------Creating a model for company schema----------------
const Company = mongoose.model("company", CompanySchema);

//--------------Post schema-------------
const PostSchema = Schema({
  id: {
    type: Number,
    required: true
  },
  comId: Number,
  title: String,
  description: String,
  deadLine: Date,
  link: String,
  major: String,
  logo: String,
  type: String,
  archived: Boolean, //true or false
  read: Boolean // true or false
});

// ---------------Creating a model for post schema----------------
const Post = mongoose.model("post", PostSchema);

const selectAll = function(model, callback) {
  model.find({}, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const select = function(model, id, callback) {
  model.find({ id: id }, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const selectP = function(id, callback) {
  Post.find({ comId: id }, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const random = function(arr) {
  var result = [];
  while (result.length < 3) {
    var randomnum = Math.floor(Math.random() * arr.length);
    if (!result.includes(arr[randomnum])) {
      result.push(arr[randomnum]);
    }
  }
  return result;
};

const random2 = function(arr) {
  let result = [];
  let randNum = Math.random() * 22 + 3;
  while (result.length < randNum) {
    var randomnum = Math.floor(Math.random() * arr.length);
    if (!result.includes(arr[randomnum].id)) {
      result.push(arr[randomnum].id);
    }
  }
  return result;
};

// -------------------------------------save General---------------------------------
// const save = function() {
//   for (var i = 1; i <= 50; i++) {
//     var item = new General({
//       id: i,
//       Name: faker.name.findName(),
//       password: faker.internet.password(),
//       email: faker.internet.email(),
//       type: faker.random.boolean()
//     });
//     item.save();
//   }
//   console.log('saved?');
// };
// save();

// -------------------------------------save Users---------------------------------
const save = function() {
  // let posts = Post.find({});
  // let comps = Company.find({});
  for (var i = 1; i <= 50; i++) {
    // let rtags = [];
    // for (var j = 1; j<=3; j++) {
    //   rtags.push(majors[Math.floor(Math.random() * majors.length)]);
    // }
    // let rfavoriteList = [];
    // for (var i = 1; i<=3; i++) {
    //   rfavoriteList.push(posts[Math.floor(Math.random() * posts.length)]);
    // }
    // let rfollowingList = [];
    // for (var i = 1; i<=3; i++) {
    //   rfollowingList.push(comps[Math.floor(Math.random() * comps.length)]);
    // }
    // let rnotificationList = [];
    // for (var i = 1; i<=3; i++) {
    //   rnotificationList.push(posts[Math.floor(Math.random() * posts.length)]);
    // }
    var item = new User({
      id: i,
      gender: faker.random.boolean(),
      birthDay: faker.date.past(),
      address: addresses[Math.floor(Math.random() * addresses.length)],
      mobileNumber: faker.phone.phoneNumber(),
      major: majors[Math.floor(Math.random() * majors.length)],
      educationLevel: eduLevels[Math.floor(Math.random() * eduLevels.length)],
      avatar: faker.image.avatar(),
      tags: random(majors),
      cv: faker.system.filePath(),
      favoriteList: [],
      followingList: [],
      notificationList: []
    });
    item.save();
  }
  console.log("saved?");
};
save();

// ---------------------------------save companies-----------------------
// const save = function() {
//   selectAll(User, (err, users) => {
//     for (var i = 1; i <= 50; i++) {
//       var item = new Company({
//         id: i,
//         description : faker.lorem.paragraph(),
//         logo : faker.image.business(),
//         twitterLink :faker.system.filePath(),
//         linkedinLink :faker.system.filePath(),
//         otherLink :faker.system.filePath(),
//         mobileNumber :faker.phone.phoneNumber(),
//         archiveList: [],
//         followersList : random2(users),
//         postsList : []
//       });
//       item.save();
//     }
//     console.log('saved?');
//   });
// };
// save();

// const savecomp = function(i, users, ps) {
//   var item = new Company({
//     id: i,
//     description: faker.lorem.paragraph(),
//     logo: faker.image.business(),
//     twitterLink: faker.system.filePath(),
//     linkedinLink: faker.system.filePath(),
//     otherLink: faker.system.filePath(),
//     mobileNumber: faker.phone.phoneNumber(),
//     archiveList: [],
//     followersList: random2(users),
//     postsList: ps
//   });
//   item.save();
// };

// const save = function() {
//   selectAll(User, (err, users) => {
//     for (var i = 1; i <= 50; i++) {
//       let ps = [];
//       selectP(i, (err, posts) => {
//         for (let j = 0; j < posts.length; j++) {
//           ps.push(posts[j].id);
//           savecomp(i, users, ps);
//         }
//       });
//     }
//   });
// };
// save();

// ------------------------------------- save Posts ---------------------------------
// const save = function() {
//   selectAll(Company, (err, comps) => {
//     for (var i = 1; i <= 50; i++) {
//       var item = new Post({
//           id: i,
//           comId: comps[Math.floor(Math.random() * comps.length)].id,
//           title:faker.lorem.sentence(),
//           description: faker.lorem.paragraph(),
//           deadLine: faker.date.future(),
//           link: faker.system.filePath(),
//           major: majors[Math.floor(Math.random() * majors.length)],
//           logo :faker.image.business(),
//           type: types[Math.floor(Math.random() * types.length)],
//           archived:faker.random.boolean(),
//           read:faker.random.boolean()
//       });
//       item.save();
//     }
//     console.log('saved?');
//   });
// };
// save();

// module.exports.save = save;
// module.exports.User = User;
// module.exports.Company = Company;
// module.exports.Post = Post;
// module.exports.General = General;
