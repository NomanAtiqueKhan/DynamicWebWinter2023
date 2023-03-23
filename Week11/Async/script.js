// var posts = [
//   { title: "Post 1", author: "Author 1", body: "This is post1" },
//   { title: "Post 2", author: "Author 2", body: "This is post2" },
// ];

// function createPosts(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 3000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       document.querySelector(
//         "#output"
//       ).innerHTML += `<li>${post.title}</li><li>${post.body}</li>`;
//     });
//   }, 1000);
// // }

// createPosts(
//   {
//     title: "Post 3",
//     author: "Author 3",
//     body: "This is a new post 3",
//   },
//   getPosts
// );

let button1 = document.querySelector("#btn1");

button1.addEventListener("click", loadText);

function loadText() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "./data/sample.txt");

  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector("#output").innerHTML = this.responseText;
    }
  };

  xhr.send();
}

let button2 = document.querySelector("#btn2");

button2.addEventListener("click", loadUser);

function loadUser() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/user.json");
  xhr.onload = function () {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      document.querySelector(
        "#output"
      ).innerHTML = `<li>${data.name}</li><li>${data.email}</li><li>${data.id}</li>`;
    }
  };

  xhr.send();
}

let button3 = document.querySelector("#btn3");

button3.addEventListener("click", loadUsers);

function loadUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/users.json");
  xhr.onload = function () {
    let output = "";
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);

      data.forEach((user) => {
        output += `<li>${user.name}</li><li>${user.email}</li>-------`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}

let button4 = document.querySelector("#btn4");

button4.addEventListener("click", loadAPI);

function loadAPI() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users");
  xhr.onload = function () {
    let output = "";
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);

      data.data.forEach((user) => {
        output += `<div class="profile"><h2>Welcome ${user.first_name}<h2>
        Your email is: ${user.email} <br> <img src = ${user.avatar} width="200" class="pic"/></div>
        `;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}
