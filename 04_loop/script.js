// for loop

// for ( let i = 1; i <= 100; i++) {
//   console.log(i);
// }

//while loop
// let a = 1;
// while (a <= 100) {
//   console.log(a);
//   a++;
// }

//do_while loop

// let s = 1;
// do {
//   console.log(s);
//   s++;
// } while (s > 10);

//for-of

//1. Iterating an Array
// let arr = ["apple", "dog", "car", "cat"];
// for (let obj of arr) {
//   console.log(obj);
// }

// 2. Iterating a String
// let messages = "saurabh";
// for (let message of messages) {
//   console.log(message);
// }

//3. Iterating a Map
// const userRoles = new Map();
// userRoles.set("Alice", "Admin");
// userRoles.set("Bob", "Editor");

// for (const [name, role] of userRoles) {
//   console.log(`${name}: ${role}`);
// }
// Output: "Alice: Admin", "Bob: Editor"

// let subjects = new Map();
// subjects.set("Math", 98);
// subjects.set("Hindi", 95);
// subjects.set("BIO", 99);

// for (let [subname, Number] of subjects) {
//   console.log(`${subname}: ${Number} `);
// }

//No Index Tracking:
// const fruits = ["apple", "banana"];
// for (const [index, fruit] of fruits.entries()) {
//   console.log(index, fruit); // 0 "apple", 1 "banana"
// }

//___________________________________________________
// When to Use
// Use for...of when:

// You need to iterate over arrays, strings, or other iterables.

// You want simpler syntax without managing indexes.

// Avoid for objects—use for...in or Object.keys() instead.
//___________________________________________________

//for .. in loop

//1. Iterating an Object’s Properties

// const person = { name: "Alice", age: 30, role: "Developer" };

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// ____________________________________________
// When to Use
// Use for...in when:

// You need to inspect keys/properties of an object.

// You want to check if an object has specific properties.

// Avoid for arrays, strings, or other iterables—use for...of or standard loops.

//__________________________________________________
