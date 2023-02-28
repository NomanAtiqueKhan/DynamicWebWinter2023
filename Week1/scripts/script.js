// console.log("hello");
// JavaScript  - ES5 ES6
// ECMAScript 5 6

// var

// var value;
// value = "Hello";
// console.log(value);
// value = 10;
// console.log(value);

// // let, const ...ES6
// let value2;
// value2 = "Alex";
// console.log(value2);

// value2 = 12;
// console.log(value2);

// // const..

// const value3 = "Alan";
// console.log(value3);
// // value3 = "Fred";
// // console.log(value3);

// const num = [1, 2, 3, 4];
// console.log(num);

// num.push(5);
// console.log(num);
// num[0] = 10;
// console.log(num);
// num.pop();
// console.log(num);

// num = [4, 5, 6, 7];
// console.log(num);

// const obj1 = {
//   fName: "Alan",
//   lName: "Smith",
// };

// console.log(obj1);
// console.log(obj1.fName);
// obj1.fName = "Siddarth";
// console.log(obj1);

// console.error("This is an error");
// console.warn("This is a warning for you");
// console.table(obj1);

// console.time("Block");
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.timeEnd("Block");

// Data types in JS:
// 1. Number

// var value1 = 10.13;
// console.log(value1);
// console.log(typeof value1);

// // 2. String
// var fName = "A";
// console.log(fName);
// console.log(typeof fName);
// //  fName = 'Alex';

// // 3. Boolean

// var status1 = true;
// console.log(status1);
// console.log(typeof status1);

// // 4. null
// var obj1 = null;
// console.log(obj1);
// console.log(typeof obj1);

// // object

// var num1 = [1, 2, 3, 4];
// console.log(num1);
// console.log(typeof num1);

// var today = new Date();
// console.log(today);
// console.log(typeof today);

// Concatenation:

// var fName = "Alan";
// var lName = "Smith";
// let age = 20;

// // console.log(fName + " " + lName);

// console.log("Welcome " + fName + " " + lName + ", Your age is " + age);

// // string literal
// // we use backticks ` `

// console.log(`Welcome ${fName} ${lName} ,Your age is ${age}`);

// strings in JS can be " ", ' ', ``

// Type conversions in JS:

// let value = 10;
// value = String(value);

// console.log(value);
// console.log(typeof value);

// let value1 = "2";
// value1 = Number(value1);
// console.log(value1);
// console.log(typeof value1);

// Operators:
// == comparison operator
// === strict equality operator
// let age = "twenty";
// if (age == 20) {
//   console.log("Welcome");
// } else {
//   console.log("UnderAge");
// }

// Increment operator /Decrement Operator

// ++ , --

// let x = 10;
// console.log(x++);
// console.log(++x);

// Ternary Operator:
// ? :

// let age = 25;
// if (age == 20) {
//   console.log("Welcome");
// } else {
//   console.log("UnderAge");
// }

// age > 28
//   ? age <= 20
//     ? console.log("Welcome")
//     : console.log("Still not allowed")
//   : age < 30
//   ? console.log("UnderAge")
//   : console.log("Anhthing else");

// Loops:

// for (var i = 0; i < 10; i++) {
//   console.log(`The value at ${i} position is ${i + 1} `);
// }

// Functions in  JavaScript:

// function add(a, b) {
//   console.log(a + b);
//   return "hello";
// }

// console.log(add(4, 5));

// Ways to define functions
// 1. Function declaration
// 2. Function Expression
// 3. Arrow Function

// // 1. Funcion Declaration
// function add(a, b) {
//   return a + b;
// }
// // 2. Function Expression
// let add1 = function (a, b) {
//   return a + b;
// };
// // console.log(add1(2, 3));
// // 3. Arrow functions ES5-6
// let add2 = (a, b) => a + b;

// console.log(add2(3, 2));

// let newFunction = (a) => a.toUpperCase();

// console.log(newFunction("hello"));

// Pre defined functions for Strings
// length...
// startsWith()
