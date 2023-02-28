// DOM programming
// DOM is an api for communiation b/w HTML,CSS and JS.
// DOM Tree is the html document loaded in the browser..

/* step1: find the relevant element you want to apply script to
    1. document.getElementById()
    2. document.querySelector()
    3. document.querySelectorAll()
    Always use # for id selection
    use . for class selection
    or you can use the element name

Step2: Make changes to the found elemnt's contents or anythng...

Step3: Create new elements and embed them in code..

Step4: running js code against the events fired by different elements....

*/

// let myHeading = document.getElementById("p1");

// let myHeading = document.querySelectorAll(".demo");
// console.log(myHeading);

// let myHeading = document.querySelector("#p1");
// myHeading.innerHTML = "<em>Hello from DOM<em>";

// let newPic = document.createElement("img");
// newPic.src =
//   "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60";
// newPic.alt = "some text";
// newPic.width = "300";

// document.querySelector(".demo").appendChild(newPic);

let myPic = document.querySelector("#pic1");

let body = document.body;

myPic.addEventListener("click", function (e) {
  document.querySelector("#xPos").innerText = e.clientX;
  document.querySelector("#yPos").innerText = e.clientY;
  console.log("picture clicked!!");

  e.stopPropagation();
  e.preventDefault();
});

body.addEventListener("click", function (e) {
  document.querySelector("#xPos").innerText = e.clientX;
  document.querySelector("#yPos").innerText = e.clientY;
  console.log("Body clicked..");
});
