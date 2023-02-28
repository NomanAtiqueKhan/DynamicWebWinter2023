// 1. Write a js function that generates the .js of any given name..generateName("Conestoga") returns "Conestoga.js".

// Function Declaration

// function generateName(name) {
//   //   if (name.endsWith(".")) {
//   //     return name + "js";
//   //   }
//   //   return name + ".js";

//   return name.endsWith(".") ? name + "js" : name + ".js";
// }

// Function expression
// let generateName = function (name) {
//   return name.endsWith(".") ? name + "js" : name + ".js";
// };

// Arrow function:
// let generateName = (name) => (name.endsWith(".") ? name + "js" : name + ".js");

// console.log(generateName("Cenestoga."));
// console.log(generateName("Alex"));

// 2. A function that checks a give number between a range INCLUSIVE and returns true if it is there and false if it is not there...checkNumber(12,1,20) will return true..checkNumber(24,1,20) will return false.

// let checkNumber = function (value, low, high) {
//   //   if (value >= low && value <= high) {
//   //     return true;
//   //   }
//   //   return false;

//   return value >= low && value <= high ? true : false;
// };

// console.log(checkNumber(12, 1, 20));
// console.log(checkNumber(24, 1, 20));

// 3. A function that checks a give number between a range INCLUSIVE if true is a paramter, and EXCLUSIVE if false is a parameter and returns true if it is there and false if it is not there...checkNumberWithS(20,1,20,true) will return true..checkNumberWithS(20,1,20,false) will return false.

// let checkNumberWithS = function (value, low, high, inclusive) {
//   //   if (inclusive) {
//   //     return value >= low && value <= high;
//   //   }
//   //   return value > low && value < high;

//   return inclusive
//     ? value >= low && value <= high
//     : value > low && value < high;
// };

// console.log(checkNumberWithS(20, 1, 20, true));
// console.log(checkNumberWithS(20, 1, 20, false));

// console.log(checkNumberWithS(20, 1, 20));

// Aguments in Functions
// function myLog(a) {
//   let value = arguments.length;
//   console.log(value);
//   for (var i = 0; i < value; i++) {
//     console.log(arguments[i]);
//   }
// }

// function myLog(...values) {
//   let value = values.length;
//   console.log(value);

//   for (var i = 0; i < value; i++) {
//     console.log(values[i]);
//   }
// }

// myLog("hello", "bye", "anything");
// // myLog("Alan", "Smith");
// myLog();

// 4. A function that prints all arguments that are above 255 ... checkOutSide(230,260,213,270) returns 260, 270..... checkOutSide(230,212,215,155) returns no number...

// let checkOutSide = function (...values) {
//   let size = values.length;
//   for (var i = 0; i < size; i++) {
//     if (values[i] > 255) {
//       console.log(values[i]);
//     }
//   }
// };

// checkOutSide(230, 260, 213, 270);
// checkOutSide(2340, 2142, 2145, 155);

// 5. A function that prints all the numbers in betwen a GIVEN range... checkRange(1,100,20,30,102,202) will print ONLY 20,30.... checkRange(1,100,2,3,4,5,89,900,1020) will print 2,3,4,5,89

// let checkRange = function (low, high, ...values) {
//   let size = values.length;
//   for (var i = 0; i < size; i++) {
//     if (values[i] > low && values[i] < high) {
//       console.log(values[i]);
//     }
//   }
// };

// checkRange(1, 100, 20, 30, 102, 202);
// checkRange(1, 100, 2, 3, 4, 5, 89, 900, 1020);

// 6. Function to calculate HST on given amount..

// var defaultRate = 0.16;

// let calculateHST = function (amount, rate = 0.12) {
//   return amount * rate;
// };

// console.log(calculateHST(10, defaultRate));
// console.log(calculateHST(20));

// Practic Question: A function that accepts current salary, increment amount and bomus amount as parameters. If bonus amount is there the function calculates new salary as current salary+increment*bonus, otherwise current salary+increment amount.

// Strings
// var str1 = "hello";
// var str2 = new String("world");

// Arrays:

// 1. forEach()

// let nums = [1, 2, 3, 4];

// nums.forEach((num) => {
//   console.log(num * 3);
// });

// let names = ["Alice", "Bob", "Christina", "Doug"];

// names.forEach((value) => {
//   console.log(value.toUpperCase());
// });

// let user = "Alex";
// user.forEach((u) => {
//   console.log(u);
// });

// 2. map()
// creates and returns a new array constructed by calling the provided function on each element....

// let array1 = [3, 2, 5, 6];

// let array2 = array1.map((value) => value * 2);

// console.log(arr,ay2);

// 3.filter : creates and returns a new array containing only those elemtns that match a condition you define in your function....

// let names = ["Alex", "Bob", "Christina", "David"];

// let result = names.filter(
//   (name) => name.toLowerCase().includes("e") || name.toLowerCase().includes("a")
// );

// console.log(result);

// Regular Expressions:

console.log("BREAK");
