
const express = require("express") ;
const app = express();
//const moongose = require("mongoose");
const port = 8080;
const path = require("path");
const ejsMate = require("ejs-mate");//for layout

app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.listen(port,(req,res)=>{
    console.log(`app are listing on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("it's working yr")
})


app.get("/home",(req,res)=>{
    res.render("./school/index.ejs");
});

// app.get("/home/part",(req,res)=>{
//     // console.log("working");
//     res.render("./html/html.ejs");
//});

app.get("/part2",(req,res)=>{
  //  res.render("./html/html2.ejs");
     res.render("./html/login.ejs");
});