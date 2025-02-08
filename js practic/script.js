//1.
// console.log("saurabh","my favorite hobby to play cricket")
//2
//console.log(45*2-10);

//3
// const sk = new Date();
// sk.getFullYear()
// console.log(sk.getFullYear());

//4
// var fast="saurabh";
// var last="kushwasha";
// console.log(fast+ " " +last);
// console.log(`${fast} ${last}`);

//5
// let a=20;
// console.log(a);
// a=25;
// console.log(a);

//6
// console.error("somthing is wrong")

//7
//console.log(12*12);

//8
// var a="saurabh";
// console.log(typeof a);

//9
// let age=17;
// if (age>18) {
//   console.log("its grater then 18 ");
// }else{
//   console.log(false);
// }

//10
// console.log(100/0);

//11
// let a=10;
// console.log(a);

//12
// const pi= Math.PI;
// console.log(pi);

//13
// let a="saurabh"
// a="soljar"
// console.log(a);

//14
// console.log(typeof null);

//15
// let a="25";
// console.log(typeof a);

//16
// let a = true;
// console.log(typeof a);

//17
// let a="saurabh",  b=567, c=true;
// console.log(a,b,c);

//18
// let a;
// console.log(typeof a);

//19
// var a=undefined;
// console.log(typeof a);

//20
// const array = [];
// array=[]

//21

// for(let i=1; i<=50; i++){
//   console.log(i);
// }

//22
// let i = 1;
// while (i <= 50) {
//   console.log(i);
//   i++;
// }

//23
// let a = 1;
// let sum = 0;

// while (a <= 10) {  // Correct condition
//   sum = sum + a;
//   a++;
//   console.log(sum);
// }

// Output: 55

//24
// let str = "saurabh"
// for(let character of str){
//   console.log(character);
// }

//25
// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//   } else {
//     console.log(i);
//   }
// }

//26
// let a=5;
// do{
//   console.log(a);
//   a--;
// }
// while(a>0)

//27

// let fact = 1;
// for (var i = 5; i > 0; i--) {
//   fact = fact * i;
// }
// console.log(fact);

//27
// var hold = 1;
// for(var i=1; i<4; i++){
//   var str="";
//   for(var j=1; j<4; j++){
//     str+=`${hold}`;
//     hold++;
//   }
//   console.log(str);
// }

//28
// var arr= [1,2,3,4,5,6,7,8];
// for(var i =0; i<Math.floor(arr.length / 2); i++){
//   var temp = arr[i];
//   arr[i] = arr[arr.length -1 -i];
//   arr[arr.length-i-1] = temp;
// }
// console.log(arr);

//29
// let num = 1;
// while (num < 101) {
//   if (num % 5 === 0) console.log(num);
//   num++;
// }

//30
// var obj = {
//   name: "saurabh",
//   email: "soljark@gmail.com",
//   age: 25,
// };

// for (let key in obj) {
//   console.log(key);
// }

//31
// var a = ["a", "b", "c", "d", "e", "f", "j"];

// a.forEach(function (value) {
//   console.log(value);
// });

//32
// var arr = [1,2,3,4,5];
// console.log(arr[1]);

//33
// var arr = [1,2,3,4,5];
// arr.unshift(0);
// arr.unshift(-1)
// console.log(arr);

//34
// var arr= [1,2,3,4,5]
// arr.pop();
// console.log(arr);

//35
// var arr= [1,2,3,4,5]
// console.log(arr.slice(0,3));

//36
// var arr= [1,2,3,4,5]
// console.log(arr.indexOf(5));

//37
// var arr= [1,2,3,4,5]
// console.log(arr.includes(1));

//38
// var arr1= [1,2,3,4,5]
// var arr2 =[6,7,8,9,10]
// console.log(arr1.concat(arr2));

//39
// var arr= [11,24,56,5,6];
// for(var j=0; j<arr.length-1; j++){
//   for(var i=0; i<arr.length-j -1; i++){
//     if(arr[i]>arr[i+1]){
//       var temp = arr[i];
//       arr[i] = arr[i+1];
//       arr[i +1] = temp;
//     }
//   }
// }
// console.log(arr);

//40
// var arr = [11, 24, 56, 5, 6];
// var arr2 = [];

// arr.forEach(function (value) {
//   arr2.push(value);
// });

// console.log(arr2);
