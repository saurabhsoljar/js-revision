// function sayaMyName (){
//   console.log("s");
//   console.log("a");
//   console.log("u");
//   console.log("r");
//   console.log("a");
//   console.log("b");
//   console.log("h");
  
// }

//sayaMyName()

function addTwoNumber(number1, number2){
  
  let result = number1 + number2
  return result
  
}

const result = addTwoNumber(2,3)

//console.log("Result: ", result);

function loginUserMessage(username = "soljar") {
  if (username === undefined) {
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage("saurabh"));

function calculateCartPrise(val1, val2, ...num1){
  return num1
}

//console.log(calculateCartPrise(5,6,7,8));

const user = {
  username: "saurabh",
  price:199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and prise is ${anyobject.price}`);
  
}
//handleObject(user)

handleObject({
  username : "sam",
  price :399
})

const myNewArray =[200, 500, 600, 800, 1000]
function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(myNewArray));
