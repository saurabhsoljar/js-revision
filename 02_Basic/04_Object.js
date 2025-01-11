//const tinderUser = new Object() // single turn object

const tinderUser = {} // non-single turn object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularUser = {
  email:"saurabh@gmail.com",
  fullname:{
    userfullname:{
      firstname:"saurabh",
      lastname: "kumar"
    }
  }
}


//console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({} ,obj1, obj2)
console.log(obj3);
