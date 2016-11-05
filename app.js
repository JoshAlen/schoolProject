var express = require("express");
var app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(rep, res){
   res.render("landing"); 
});

app.get("/projectone", function(req, res){
   res.render("projectone");
});

app.get("/projectTwo", function(req, res){
   res.render("projectTwo");
});
app.get("/projectThreePartOne", function(req, res){
   res.render("projectThreePartOne");
});
app.get("/projectThreePartTwo", function(req, res){
   res.render("projectThreePartTwo");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server is running"); 
});