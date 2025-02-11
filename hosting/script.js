//Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their scope during compilation. However, initializations are NOT hoisted. Let’s break it down with examples:

//1. Variable Hoisting

//2. Function Hoisting
// greet(); // "Hello!"
// function greet() {
//   console.log("Hello!");
// }
// var num;
// console.log(num); // undefined
// var num = 5;

// foo(); // "I'm hoisted!"
// function foo() {
//   console.log("I'm hoisted!");
// }

//  **********************************

console.log(a);

var a = "saurabh";

//funcction definition
//function declaration
saurabh();
function saurabh() {
  console.log("soljar");
}

//funcction definition
// function expression

say();
var say = function () {
  console.log("hii");
};

