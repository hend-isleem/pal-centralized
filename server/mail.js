require("dotenv").config();
const nodemailer = require("nodemailer");
const search = require("../API/search.js");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
// console.log("hahaha>>> : ", process.env.PASSWORD, ">>> ",  process.env.EMAIL);

// let mail = {
// from: 'weseekps@gmail.com', // sender address
// to: "hendisleem@gmail.com", // list of receivers
// subject: "Hello ✔", // Subject line
// text: "Hello world? Naaaaaaah", // plain text body
// html: "<b>Hello world?</b>" // html body
// };

// transporter.sendMail(mail, (err, mail) => {
//     if (err) {
//         console.log("err in sending email >>>>>>>>>>> ", err);
//     } else {
//         console.log("email is sent !!!!!");
//     }
// })
function sendMail(compID, post) {
  search.getFollowersE(compID, emails => {
    let mail = {
      from: "weseekps@gmail.com", // sender address
      to: emails + ", hendisleem@gmail.com", // list of receivers
      subject: "new Post ✔ ", // Subject line
      text: "A new post has been added! grab the chance ^_^", // plain text body
      html: `<h2>A new post has been added! grab the chance ^_^</h2><br><h3>${post.description} TO APPLY >> ${post.link}</h3>` // html body
    };
    transporter.sendMail(mail, (err, mail) => {
      if (err) {
        console.log("err in sending email >>>>>>>>>>> ", err);
      } else {
        console.log("email is sent wow !!!!!");
      }
    });
  });
}

let pst = {
  id: 1,
  comId: 39,
  title: "Perferendis temporibus voluptas.",
  description:
    "Ea eligendi maxime illo sed voluptatem rerum ut nulla tempore. Molesti...",
  deadLine: "2020-08-18T05:44:12.355+00:00",
  major: "Medicine",
  logo: "https://lorempixel.com/640/480/business",
  type: "jop",
  archived: false,
  read: true,
  link: "https://www.google.com/"
};
sendMail(8, pst);

function sendMsg(name , email, msg) {
  let mail = {
      from: "weseekps@gmail.com",
      to: "weseekps@gmail.com"+ ", hendisleem@gmail.com",
      subject: name,
      text: msg,
      html: `<h4>${msg}<br> to contact me back > Email: ${email} <br><br> ${name}</h4>`
  };
  transporter.sendMail(mail, (err, mail) => {
      if (err) {
      console.log("err in sending email >>>>>>>>>>> ", err);
      } else {
      console.log("email is sent wow !!!!!");
      }
  });
}

sendMsg("haha","hoho@hotmail.com", "hahhahahahhahahahahahha");

module.exports.sendMail = sendMail;
module.exports.sendMsg = sendMsg;