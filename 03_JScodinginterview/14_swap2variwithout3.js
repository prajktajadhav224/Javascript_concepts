// 14) how to swap two variables without using the third


var a = 71;
var b = 8;

// with using third variables 
// let temp = a;
// a= b;
// b= temp;
// console.log(`Value of a is ${a} value ob B is ${b}`);

// without third variable 

a = a + b;
b = a - b;
a = a - b;
console.log(`Value of a is ${a} value ob B is ${b}`);