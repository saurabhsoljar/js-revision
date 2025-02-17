//1. Write a JavaScript function that calculates the sum of two numbers
// function sun(a,b){
//   return a+b;
// }
// const a= 10;
// const b= 20;
// const result =sun(a,b);
// console.log("The sum of", a, "and", b, "is", result);

//2. Write a JavaScript program to reverse the given string

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// const inputString = "hello world";
// const reversedString = reverseString(inputString);
// console.log("Reversed string:", reversedString);

// 3. Write a JavaScript function that finds the maximum number in an array

function findMax(arr) {
  if (arr.length === 0) {
    return null; // Handle empty array
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// const numbers = [10, 5, 25, 8, 150];
// const maxNumber = findMax(numbers);
// console.log("The maximum number is:", maxNumber);

//4. Write a JavaScript program that calculates the factorial of a number

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// const number = 5;
// const result = factorial(number);
// console.log("Factorial of", number, "is", result);

//5. Write a JavaScript program to check whether the given number is prime

function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false; // If divisible by any number between 2 and the square root of a number, it's not prime
    }
  }
  return true; // If the loop completes without finding a divisor, the number is prime
}
// const num = 16;
// const isPrimeResult = isPrime(num);
// if (isPrimeResult) {
//   console.log(num, "is a prime number.");
// } else {
//   console.log(num, "is not a prime number.");
// }

