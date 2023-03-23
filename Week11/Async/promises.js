// let p = new Promise((resolve, reject) => {
//   var x = 2 + 3;

//   if (x == 5) {
//     resolve("Success!");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("Congrats! " + message);
// }).catch((err) => {
//   console.log("Sorry " + err);
// });

// console.log(fetch("./data/sample.txt"));

let button1 = document.querySelector("#btn1");

button1.addEventListener("click", loadText);

function loadText() {
  fetch("./data/sample.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Failed" + err);
    });
}

let button2 = document.querySelector("#btn2");

button2.addEventListener("click", loadUser);

function loadUser() {
  fetch("./data/user.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector(
        "#output"
      ).innerHTML = `<div className="profile"><h2>${data.name}</h2></div>`;
    })
    .catch((err) => {
      console.log("Failed" + err);
    });
}

let button3 = document.querySelector("#btn3");

button3.addEventListener("click", loadUsers);

async function loadUsers() {
  let res = await fetch("./data/users.json");

  let data = await res.json();

  data.forEach((user) => {
    document.querySelector("#output").innerHTML += `<li>${user.name}</li>`;
  });
}

// Async Await

// async function someFunction() {
//   let res = await fetch("./data/users.json");
//   let data = await res.json();

//   return data;
// }

// someFunction().then((data) => {
//   console.log(data);
// });

// console.log(someFunction());
