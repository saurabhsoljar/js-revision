//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["saurabh", "manish"]

const myArr2 = new Array(1,2,3,4,5)
//console.log(myArr[0]);


// Array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(7)
//myArr.shift()

// const newArr = myArr.join()
// console.log(myArr);
//console.log(typeof newArr);
//console.log( newArr);


// slice , splice

// console.log("A", myArr);
// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B", myArr);


// const myn2 = myArr.splice(1,3)
// console.log("c", myArr);
// console.log(myn2);

const colors = ['Red', 'Green', 'Blue', 'Yellow','Black' ];
const selectedColors = colors.slice(1, 3); // Starts at index 1 and goes up to (but does not include) index 3.
console.log(selectedColors); // Output: ['Green', 'Blue']

const color = ['Red', 'Green', 'Blue', 'Yellow','Black' ];
const selectedColor = colors.splice(1, 3); // Starts at index 1 and goes up to (but does not include) index 3.
console.log(selectedColor); // Output: ['Green', 'Blue']