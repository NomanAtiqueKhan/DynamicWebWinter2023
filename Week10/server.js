const { check, validationResult } = require("express-validator");
const express = require("express");
const path = require("path");

var myApp = express();
myApp.use(express.static("static"));
myApp.use(express.urlencoded({ extended: false }));
myApp.set("views", path.join(__dirname, "views"));
myApp.set("view engine", "ejs");

myApp.post(
  "/",
  [
    check("name", "Must have a name").notEmpty(),
    check("email", "Must haeve email").isEmail(),
  ],
  function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
  }
);

myApp.get("/", function (req, res) {
  res.render("home");
});
myApp.get("/about", function (req, res) {
  res.render("about");
});

myApp.get("/contact", function (req, res) {
  res.render("contact");
});

myApp.listen(8080);
console.log("Everthing executed fine.. Open http://localhost:8080/");
