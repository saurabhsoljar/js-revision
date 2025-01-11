// singleton
//object.create

//object literala

const mySum = Symbol("key")

const jsUser ={
    name: "saurabh",
    "full name": "saurabh kumar",
    [mySum]: "mykey1",
    age : 24,
    location: "Ahmadhabad",
    email: "saurabhslite2@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySum]);

// jsUser.email = "saurabh556@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "soljar@gmail.com"
// console.log(jsUser);

