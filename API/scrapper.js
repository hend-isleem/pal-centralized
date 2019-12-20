// const req = require("request");
// const cheroio = require("cheerio");
// const imgs = [];
// const titles = [];
// const discription = [];
// const href = [];
// console.log("hi");
// req(
//   "https://www.bayt.com/en/jordan/jobs/roles/administration/",
//   (error, res, html) => {
//     if (!error && res.statusCode === 200) {
//       const $ = cheroio.load(html);
//       const node = $("li img");
//       var i = 0;
//       $(".has-pointer-d img").each((i, el) => {
//         const img = $(el).attr("src");
//         imgs.push(img);
//       });
//       $(".has-pointer-d .m0 a").each((i, el) => {
//         const imgSrc = $(el).text();
//         // console.log(imgSrc);
//         titles.push(imgSrc);
//       });
//       $(".has-pointer-d .m0 a").each((i, el) => {
//         const imgSrc =
//           "https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=" +
//           $(el)
//             .attr("data-job-id")
//             .toString();
//         // console.log(imgSrc);
//         href.push(imgSrc);
//       });
//       $(".has-pointer-d  .t-regular a").each((i, el) => {
//         const imgSrc = $(el).text();
//         // console.log(imgSrc);
//         titles.push(imgSrc);
//       });
//       // $(".has-pointer-d .t-small p").each((i, el) => {
//       //   const imgSrc = $(el).text();
//       //   console.log(imgSrc);
//       // });
//       $(".has-pointer-d .t-small p").each((i, el) => {
//         const imgSrc = $(el).text();
//         // console.log(imgSrc);
//         discription.push(imgSrc);
//       });
//       //   const img = node.find("img").attr("src");
//     }
//     console.log(imgs);
//     console.log(titles);
//     console.log(discription);
//     console.log(href);
//   }
// );

let img = [ //13
  'img0cf.b8cdn.com/120x120/images/logo/49/1330049_logo_1531736177_n.png',
  'img0cf.b8cdn.com/120x120/images/logo/08/2047508_logo_1576401301_n.png',
  'img0cf.b8cdn.com/120x120/images/logo/48/1480348_logo_20190902072645_n.png',
  'img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg',  
  'img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg',  
  'img0cf.b8cdn.com/120x120/images/logo/30/2023130_logo_1541590418_n.png',
  'img0cf.b8cdn.com/120x120/images/logo/32/2046332_logo_1574255507_n.png',
  'img0cf.b8cdn.com/120x120/images/logo/30/2023130_logo_1541590418_n.png',
  'img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg',  
  'img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg',  
  'img4cf.b8cdn.com/bayt/assets/b8static/svg/companies_no_logo.svg',  
  'img0cf.b8cdn.com/120x120/images/logo/48/1480348_logo_20190902072645_n.png',
  'img0cf.b8cdn.com/120x120/images/logo/00/0_logo_1552294988_n.png'   
];
let titles = [ // 26
  'Executive Analyst',        
  'CEO office management',    
  'Admin Officer',
  'Office Administrator',     
  'office manager',
  'Soft Services Coordinator (6 months renewable contract)',
  'Office Manager',
  'Compliance Associate (6 months contract)',
  'Executive Administrative Assistant',
  'Receptionist',
  'HR & Office Manager',      
  'Admin Officer',
  'Community Planner in Azraq, Jordan',
  'Executive Analyst',        
  'CEO office management',    
  'Admin Officer',
  'Office Administrator',     
  'office manager',
  'Soft Services Coordinator (6 months renewable contract)',
  'Office Manager',
  'Compliance Associate (6 months contract)',
  'Executive Administrative Assistant',
  'Receptionist',
  'HR & Office Manager',      
  'Admin Officer',
  'Community Planner in Azraq, Jordan'
];
let dis = [ // 13
  'POSITION OVERVIEW As an Executive Analyst within Avertra your job is not just to assist the CEO in his daily tasks, but rather it…',
  'Communicate with all parties in an out of Aghati ·         Carry the responsibility of handling the CEO office from all…',
  'Do you want to make an impact and help transform people’s lives? At Bayt.com we are committed to empowering people to lead better…',
  'Ensures proper flow of office procedures, and supports the office director by carrying out common office duties. Maintains a positive…',     
  'Receive correspondence to the CEO, in all forms oral, written, electronic and paper. Filter the correspondence, reply, handle the…',       
  'Manage the team providing first line soft services to the site(s), including reception, mail operations, meeting & events,…',       
  'Organize and schedule meetings and appointments Partner with HR to maintain office policies as necessary Coordinate with IT department…',    
  'Night Shift, Ability to handle promptly work related emergencies whenever they occur.  · Proactively moderates (Screen) all types…',       
  'Our client is newly established branch for an International holding Company that deals with BMS, Smart Systems & Home Automation.…',
  'Our client is newly established branch for an International holding Company that deals with BMS, Smart Systems & Home Automation.…',
  'Responsibilities: Manage and maintain the CEO’s diary and email account. Filter emails, highlight urgent correspondence and print…',
  'Do you want to make an impact and help transform people’s lives? At Bayt.com we are committed to empowering people to lead better…',
  'Jordan - Zarqa, Azraq Job Summary AECOM is seeking a Real Property Community Planner for a position supporting a construction effort…'       
];
let urls = [ // 13
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4129595',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4129573',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4080747',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4128238',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4127562',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4121623',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4121594',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4121490',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4116994',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4116973',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=4112341',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=53482807',
  'https://www.bayt.com/en/jordan/jobs/roles/administration/?jobId=52841670'
]