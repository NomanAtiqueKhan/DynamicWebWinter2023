const { check, validationResult } = require("express-validator");
const express = require("express");
const path = require("path");
var mongoose = require("mongoose");

var myApp = express();
myApp.use(express.static("static"));
myApp.use(express.urlencoded({ extended: false }));
myApp.set("views", path.join(__dirname, "views"));
myApp.set("view engine", "ejs");

mongoose.connect("mongodb://0.0.0.0:27017/week10");

const Contact = mongoose.model("Contact", { name: String, email: String });

myApp.post(
  "/contact",
  [
    check("name", "Must have a name").notEmpty(),
    check("email", "Must haeve email").isEmail(),
  ],
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("contact", { errors: errors.array() });
    } else {
      var name = req.body.name;
      var email = req.body.email;
      var myNewContact = new Contact({ name: name, email: email });

      myNewContact.save().then(() => console.log("New contact Saved"));

      res.render("contactthanks", { name: name, email: email });
    }
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
