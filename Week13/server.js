const express = require("express");
const path = require("path");
const { check, validationResult } = require("express-validator");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("static"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post(
  "/contact",
  [
    check("name", "Name message").notEmpty(),
    check("email", "No or bad email").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    var name = req.body.name;
    var email = req.body.email;
    res.render("contactthanks", { errors: errors.array() });
    // res.render("contactthanks", { name: name, email: email }); extra
  }
);

app.listen(3000, () => {
  console.log("Server is now ready at 3000 Port");
});
