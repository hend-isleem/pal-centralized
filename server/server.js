const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;
let router = express.Router();

// app.get("/", function(req, res) {
//   res.send("Hello World!");
// });

// app.listen(3001, function() {
//   console.log("Example app listening on port 3000!");
// });

router.get('/',function(req,res){
  res.send("Hello World!");
});

router.post('/', function(req, res){
  res.send("It's a post route, grab the data and save in the Mongo");
});

app.use('/api',router);
// app.use(express.static('public'));

app.listen(PORT,function(){
  console.log('Server is running at PORT:',PORT);
});
