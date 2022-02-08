//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1> HELLO </h1>");
});

app.get("/contact", (req, res) => {
  res.send("+380673358853");
} );

app.get("/about", (req, res) => {
  res.send("hello, my name is Dmytryk  I willing to become web developer");
});

app.get("/prices", (req, res) => {
  res.send("42 42 2");
});

app.listen(3000, function(){
  console.log("server started");
});
