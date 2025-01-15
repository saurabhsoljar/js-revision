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
console.log(loginUserMessage("saurabh"));
