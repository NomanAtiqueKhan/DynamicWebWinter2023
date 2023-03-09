// console.log("Hello");

// Objects in JavaScript:

// object data starts with { and ends } and inside there are keyvalue pairs which are clled properties...

// var obj = {}; //empty object

// var user={name:"Alan",age:20};

// console.log(user["name"]); //array based notation..
// console.log(user.age); //dot notation...

// var campus ={name:"Conestoga",lat:43.2332,lng:-79.2332};
// console.log(campus.lat);
// campus.name = "Conestoga Waterloo";
// console.log(campus);
// campus.address="107 Univ. Ave";
// console.log(campus);

// delete campus.address;
// console.log(campus);

// let user = {
//   firstName: "Alan",
//   lastName: "Smith",
//   email: "alan@gmail.com",
//   loggedIn: false,
//   hobbies: ["reading", "sports"],
//   prefs: { color: "red", model: "Audi" },
//   logIn: function () {
//     this.loggedIn = true;
//   },
//   logOut: function () {
//     this.loggedIn = false;
//   },
// };

// console.log(user);

// let user1 = {
//   firstName: "Bob",
//   lastName: "Smith",
//   email: "bob@gmail.com",
//   loggedIn: true,
//   hobbies: ["cycling", "sports"],
//   prefs: { color: "green", model: "Audi" },
//   logIn: function () {
//     this.loggedIn = true;
//   },
//   logOut: function () {
//     this.loggedIn = false;
//   },
// };
// console.log(user1);

// Constructor function

// function User(f, l, e) {
//   this.firstName = f;
//   this.lastName = l;
//   this.email = e;
//   this.loggedIn = false;
//   this.hobbies = ["reading", "cycling"];
//   //   this.prefs = { color: "red", model: "Audi" };
//   //   this.logIn = function () {
//   //     this.loggedIn = true;
//   //   };
//   //   this.logOut = function () {
//   //     this.loggedIn = false;
//   //   };
// }

// User.prototype.prefs = { color: "red", model: "Audi" };
// User.prototype.logIn = function () {
//   this.loggedIn = true;
// };

// User.prototype.logOut = function () {
//   this.loggedIn = false;
// };

// let user1 = new User("Alan", "Smith", "alan@gmail.com");
// let user2 = new User("Christina", "Smith", "christina@gmail.com");

// console.log(user1, user2);
// console.log(user1.prefs);

// PROTOTYPAL INHERITANCE... when we put all common features inside the prototype of the constructor rather than itself

let users = [
  {
    firstName: "Alan",
    lastName: "Smith",
    email: "alan@gmail.com",
    loggedIn: false,
    age: 22,
    hobbies: ["reading", "sports"],
    prefs: { color: "red", model: "Audi" },
    logIn: function () {
      this.loggedIn = true;
    },
    logOut: function () {
      this.loggedIn = false;
    },
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    email: "bob@gmail.com",
    loggedIn: true,
    age: 19,
    hobbies: ["flying", "sports"],
    prefs: { color: "green", model: "Vovo" },
    logIn: function () {
      this.loggedIn = true;
    },
    logOut: function () {
      this.loggedIn = false;
    },
  },
  {
    firstName: "Chris",
    lastName: "Lee",
    email: "chris@gmail.com",
    loggedIn: false,
    hobbies: ["sports"],
    age: 25,
    prefs: { color: "blue", model: "Honda" },
    logIn: function () {
      this.loggedIn = true;
    },
    logOut: function () {
      this.loggedIn = false;
    },
  },
];

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);

users.forEach(function (user) {
  if (user.firstName.toLowerCase().startsWith("a")) {
    console.log(user.lastName);
  }
});
