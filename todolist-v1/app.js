const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

const items = ["Learn hard", "Play guitar", "repeat"];
const workItems = [];

app.get("/", (req, res) => {

   const day = date.getDate();
   res.render("list", {listTitle: day, newListItem: items});

});

app.post("/", (req, res) => {
  const item = req.body.addItem

  if(req.body.list === "WorkList"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", {listTitle: "WorkList", newListItem: workItems});
});

app.get("/about", (req, res) => {
  res.render("about");
});



app.listen(3000, () => {
  console.log("Server started to work");
})
