//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const path = require("path");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



app.get("/", function(req, res){
    res.render("Home");
});

app.post("/", function(req, res){
});


let port = process.env.PORT;
if (port == null || port == ""){
  port = 3000;
}
app.listen(port, function() {
  console.log("Server  has started ");
});
