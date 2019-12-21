const faker = require("faker"); // dummy Data
// // const req = require("request");
// // const cheroio = require("cheerio");
// // const imgs = [];
// // const titles = [];
// // const discription = [];
// // const href = [];
// // console.log("hi");
// // req(
// //   "https://www.bayt.com/en/jordan/jobs/roles/administration/",
// //   (error, res, html) => {
// //     if (!error && res.statusCode === 200) {
// //       const $ = cheroio.load(html);
// //       const node = $("li img");
// //       var i = 0;
// //       $(".has-pointer-d img").each((i, el) => {
// //         const img = $(el).attr("src");
// //         imgs.push(img);
// //       });
// //       $(".has-pointer-d .m0 a").each((i, el) => {
// //         const imgSrc = $(el).text();
// //         // console.log(imgSrc);
// //         titles.push(imgSrc);
// //       });
// //       $(".has-pointer-d .m0 a").each((i, el) => {
// //         const imgSrc =
// //           "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=" +
// //           $(el)
// //             .attr("data-job-id")
// //             .toString();
// //         // console.log(imgSrc);
// //         href.push(imgSrc);
// //       });
// //       $(".has-pointer-d  .t-regular a").each((i, el) => {
// //         const imgSrc = $(el).text();
// //         // console.log(imgSrc);
// //         titles.push(imgSrc);
// //       });
// //       // $(".has-pointer-d .t-small p").each((i, el) => {
// //       //   const imgSrc = $(el).text();
// //       //   console.log(imgSrc);
// //       // });
// //       $(".has-pointer-d .t-small p").each((i, el) => {
// //         const imgSrc = $(el).text();
// //         // console.log(imgSrc);
// //         discription.push(imgSrc);
// //       });
// //       //   const img = node.find("img").attr("src");
// //     }
// //     console.log(imgs);
// //     console.log(titles);
// //     console.log(discription);
// //     console.log(href);
// //   }
// // );

// let imgs = [
//   //13
//   "img0cf.b8cdn.com/120x120/images/logo/49/1330049_logo_1531736177_n.png",
//   "img0cf.b8cdn.com/120x120/images/logo/08/2047508_logo_1576401301_n.png",
//   "img0cf.b8cdn.com/120x120/images/logo/48/1480348_logo_20190902072645_n.png",
//   "img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg",
//   "img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg",
//   "img0cf.b8cdn.com/120x120/images/logo/30/2023130_logo_1541590418_n.png",
//   "img0cf.b8cdn.com/120x120/images/logo/32/2046332_logo_1574255507_n.png",
//   "img0cf.b8cdn.com/120x120/images/logo/30/2023130_logo_1541590418_n.png",
//   "img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg",
//   "img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg",
//   "img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg",
//   "img0cf.b8cdn.com/120x120/images/logo/48/1480348_logo_20190902072645_n.png",
//   "img0cf.b8cdn.com/120x120/images/logo/00/0_logo_1552294988_n.png"
// ];
// let titles = [
//   "CEO office management",
//   "Office Administrator",
//   "Soft Services Coordinator (6 months renewable contract)",
//   "Compliance Associate (6 months contract)",
//   "Receptionist",
//   "Community Planner in Azraq, Jordan",
//   "Executive Analyst",
//   "CEO office management",
//   "Soft Services Coordinator (6 months renewable contract)",
//   "Compliance Associate (6 months contract)",
//   "Executive Administrative Assistant",
//   "Receptionist",
//   "Community Planner in Azraq, Jordan"
// ];
// let dis = [
//   "POSITION OVERVIEW As an Executive Analyst within Avertra your job is not just to assist the CEO in his daily tasks, but rather it…",
//   "Communicate with all parties in an out of Aghati ·         Carry the responsibility of handling the CEO office from all…",
//   "Do you want to make an impact and help transform people’s lives? At Bayt.com we are committed to empowering people to lead better…",
//   "Ensures proper flow of office procedures, and supports the office director by carrying out common office duties. Maintains a positive…",
//   "Receive correspondence to the CEO, in all forms oral, written, electronic and paper. Filter the correspondence, reply, handle the…",
//   "Manage the team providing first line soft services to the site(s), including reception, mail operations, meeting & events,…",
//   "Organize and schedule meetings and appointments Partner with HR to maintain office policies as necessary Coordinate with IT department…",
//   "Night Shift, Ability to handle promptly work related emergencies whenever they occur.  · Proactively moderates (Screen) all types…",
//   "Our client is newly established branch for an International holding Company that deals with BMS, Smart Systems & Home Automation.…",
//   "Our client is newly established branch for an International holding Company that deals with BMS, Smart Systems & Home Automation.…",
//   "Responsibilities: Manage and maintain the CEO’s diary and email account. Filter emails, highlight urgent correspondence and print…",
//   "Do you want to make an impact and help transform people’s lives? At Bayt.com we are committed to empowering people to lead better…",
//   "Jordan - Zarqa, Azraq Job Summary AECOM is seeking a Real Property Community Planner for a position supporting a construction effort…"
// ];
// let urls = [
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4129595",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4129573",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4080747",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4128238",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4127562",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4121623",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4121594",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4121490",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4116994",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4116973",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4112341",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=53482807",
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=52841670"
// ];

// const req = require("request");
// const cheroio = require("cheerio");
// const dedline = [];
// const titles = [];
// const discription = [];
// const href = [];
// const major = [];
// const DataObj = {};
// req(
//   "https://www.scholarshipportal.com/scholarships/united-states",
//   (error, res, html) => {
//     if (!error && res.statusCode === 200) {
//       const $ = cheroio.load(html);
//       // const node = $("div");
//       var i = 0;
//       $(".scholarship__title").each((i, el) => {
//         const img = $(el).text();
//         titles.push(img);
//       });
//       $(" .col-sm-8  div  .scholarship li:last-child .u-m-left-20").each(
//         (i, el) => {
//           const imgSrc = $(el).text();
//           // console.log(imgSrc);
//           dedline.push(imgSrc);
//         }
//       );
//       $(" .col-sm-8  div  .scholarship li:first-child .u-m-left-20").each(
//         (i, el) => {
//           const imgSrc = $(el).text();
//           // console.log(imgSrc);
//           major.push(imgSrc);
//         }
//       );
//       $(" .col-sm-8  div  .scholarship p").each((i, el) => {
//         const imgSrc = $(el).text();
//         discription.push(imgSrc);
//       });
//       $(".col-sm-8 div  .scholarship").each((i, el) => {
//         const imgSrc = "https://www.scholarshipportal.com" + $(el).attr("href");
//         href.push(imgSrc);
//       });
//     }
//     console.log(dedline, "dedline");
//     console.log(titles, "titles");
//     console.log(discription, "discription");
//     console.log(href, "href");
//     console.log(major, "major");
//   }
// );

// const majors = [
//   "Achitecture",
//   "Art",
//   "Business",
//   "Media",
//   "Computer",
//   "Science",
//   "Medicine",
//   "Languages",
//   "Law",
//   "Philosophy",
//   "Political",
//   "Tourisim",
//   "Sports",
//   "History",
//   "Engineerong",
//   "IT",
//   "Education",
//   "Literature"
// ];
// const types = ["scholarShip", "jop", "training"];

// let dedlines = [
//   "May 31, 2020",
//   "May 1, 2020",
//   "December 20, 2020",
//   "May 1, 2020",
//   "December 31, 2019",
//   "December 29, 2022",
//   "April 15, 2020",
//   "February 15, 2020",
//   "May 15, 2020",
//   "July 22, 2020",
//   "January 1, 2020",
//   "March 2, 2020",
//   "January 31, 2020",
//   "August 28, 2020"
// ];
// let titles = [
//   "International Distinction Awards 2019-2020",
//   "Quanthub Women in Data Science Scholarship",
//   "Derrick Law Firm",
//   "The MyUS.com Global Perspectives Scholarship",
//   "7shifts Culinary scholarship",
//   "International Scholarship Program (Firdaws Academy)",
//   "Keto Scholarship 2020",
//   "Robert M. Helfend Criminal Defense Scholarship",
//   "Optimizemyfirm.com Law Firm Marketing Scholarship",
//   "Academic Scholarship for Online MBA at University of Essex",
//   "MIT THINK Scholarship Program",
//   "Thank An Officer 2020 (HS)",
//   "New Year’s Resolution Scholarship",
//   "Your Company Formations Business Scholarship"
// ];
// let discriptions = [
//   "We give international students the possibility to explore all their study options in one place. We empower the world to choose education. How do we do that? We gather all the relevant information for future international students",
//   "A critical benefit of QuantHub's skill assessment platform is its potential to reduce bias in the recruitment process and therefore increase diversity in tech and analytical teams. We believe that diversity in data science teams is good",
//   "The Dirk Derrick Car &amp; Truck Accident Injury Scholarship is an award for any current or soon-to-be undergrad in the United States who has had his or her life altered due to an injury from a car or truck accident",
//   "MyUS.com is pleased to announce its first annual, “Global Perspectives” scholarship – focused on the role of experiential learning in preparing global-ready graduates.\n" +
//     "As an industry leader in international shipping and shopping",
//   "The 7shifts Culinary Scholarship program empowers the next generation of restaurant workers to get the education they need to propel the industry forward. The culinary scholarship provides a bursary for post-secondary tuition to study",
//   "Firdaws Academy believes in providing scholarship opportunities for deserving students. In recognition of their achievement and as an incentive for all those studying the Arabic language and Islamic studies to excel.",
//   "The value we give to health education and the food we consume can be seen in our commitment to provide you with reliable and well-researched information about the ketogenic diet, at shebegan magazine.",
//   "Los Angeles criminal defense attorney Robert M. Helfend is offering a $500 scholarship to one undergraduate or law school student in the United States.\n" +
//     "Robert attended the University of California-Berkeley as an undergraduate",
//   "Welcome to the OptimizeMyFirm Law Firm Marketing Scholarship. We are proud to be offering the 2019-2020 scholarship to students with creative marketing ideas. The scholarship is not limited to students pursuing marketing degrees.",
//   "Students starting an online MBA with University of Essex Online in the 2019-2020 academic year may be eligible for an Academic Scholarship towards the cost of their tuition fee.",
//   "Rather than requiring students to have completed a research project before applying, THINK caters to students who have done extensive research on the background of a potential research project and are looking for additional guidanance",
//   "Thank An Officer proudly offers scholarships to deserving students.\n" +
//     "Since the inception of our scholarship program, we’ve gifted over $35,000 to applicants to pursue their dreams. We’ve been able to capture stories and share exceperinces",
//   "New year, new you – or at least slightly newer you. Setting lofty goals in your New Year’s resolutions can feel inspiring but it’s important to remember that 80% of resolutions fail by the second week in February.",
//   "Your Company Formations Business Scholarship\n" +
//     "Funding for Undergraduate and Postgraduate Students\n" +
//     "Your Company Formations is a leading company formation agent, an office Companies House authorised parter. We are proud at providing this"
// ];
// let hrefs = [
//   "https://www.scholarshipportal.com/scholarship/international-distinction-awards-2019-2020",
//   "https://www.scholarshipportal.com/scholarship/quanthub-women-in-data-science-scholarship",
//   "https://www.scholarshipportal.com/scholarship/derrick-law-firm",
//   "https://www.scholarshipportal.com/scholarship/the-my-us-com-global-perspectives-scholarship",
//   "https://www.scholarshipportal.com/scholarship/7shifts-culinary-scholarship",
//   "https://www.scholarshipportal.com/scholarship/international-scholarship-program-firdaws-academy",
//   "https://www.scholarshipportal.com/scholarship/keto-scholarship-2020",
//   "https://www.scholarshipportal.com/scholarship/robert-m-helfend-criminal-defense-scholarship",
//   "https://www.scholarshipportal.com/scholarship/optimizemyfirm-com-law-firm-marketing-scholarship",
//   "https://www.scholarshipportal.com/scholarship/academic-scholarships-for-online-mba-at-university-of-essex",
//   "https://www.scholarshipportal.com/scholarship/mit-think-scholarship-program",
//   "https://www.scholarshipportal.com/scholarship/thank-an-officer-2020-hs",
//   "https://www.scholarshipportal.com/scholarship/new-year-s-resolution-scholarship",
//   "https://www.scholarshipportal.com/scholarship/your-company-formations-business-scholarship"
// ];
// let edmajor = [
//   "Bachelor, Master",
//   "Bachelor",
//   "Master, Bachelor, Phd, Course",
//   "Master, Bachelor",
//   "Bachelor, Course",
//   "Course",
//   "Master, Bachelor",
//   "Master, Bachelor, Phd",
//   "Bachelor, Course",
//   "Master",
//   "Course",
//   "Course",
//   "Master, Bachelor, Phd",
//   "Master, Bachelor, Phd, Course"
// ];

// let imgs = [
//   "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1553504038-be4b0a7d7161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1516910817563-4df1c1b69058?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1536940135352-b4b3875df888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
// ];

// ------------------------------------- save Posts ---------------------------------
// const save = function() {
//   for (var i = 1; i <= 13; i++) {
//     var item = new Post({
//       id: i * 87,
//       comId: Math.floor(Math.random() * 50),
//       title: titles[i - 1],
//       description: dis[i - 1],
//       deadLine: faker.date.future(),
//       link: urls[i - 1],
//       major: majors[Math.floor(Math.random() * majors.length)],
//       logo: imgs[i - 1],
//       type: types[Math.floor(Math.random() * types.length)],
//       archived: faker.random.boolean(),
//       read: faker.random.boolean()
//     });
//     item.save();
//   }
//   console.log("saved?");
// };
// save();
// console.log(urls.length);
// console.log(titles.length);
// console.log(dis.length);
// console.log(imgs.length);
