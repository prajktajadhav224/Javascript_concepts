
let myArray= [1,2,3,4,5]
console.log(myArray);

// myArray.push(6);    // [ 1, 2, 3, 4, 5, 6 ]
// console.log(myArray);
// myArray.push(7);   // [ 1, 2, 3, 4, 5, 6, 7]
// console.log(myArray);
// myArray.pop(7);    // [ 1, 2, 3, 4, 5, 6 ]
// console.log(myArray);
// myArray.unshift(9)    //[ 9, 1, 2, 3,4, 5, 6]
// console.log(myArray); 

const anotherarray= [1,2,3,[4,5],6,[6,7,8],8,9];
const real_arr = anotherarray.flat(Infinity);
console.log(real_arr);

// //Question 1: How do you create an empty array in JavaScript?
//     let arr = [];
//     let arrr = new Array();

// //Question 2: How do you access the first and last elements of an array?
//     let arr = [1, 2, 3, 4];
//     let firstElement = arr[0]; // 1
//     let lastElement = arr[arr.length - 1]; // 4

// // Question 3: How do you add an element to the end of an array?
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

// // Question 4: How do you remove the last element from an array?
// let arr = [1, 2, 3, 4];
// arr.pop(4);
// console.log(arr); // [1, 2, 3]


// // Question 7: How do you remove an element from an array at a specific index?
// let arr = [1, 2, 3];
// arr.splice(2, 1);
// console.log(arr); // [1, 2]

// // Question 8: How do you concatenate two arrays in JavaScript?
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let newArr = arr1.concat(arr2);
// console.log(newArr); // [1, 2, 3, 4]

// let newArr1 = [...arr1,...arr2];
// console.log(newArr1); // [1, 2, 3, 4]


// // Question 3: What is the difference between .filter() and .find()?
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]
// const firstEvenNumber = numbers.find(num => num % 2 === 0);
// console.log(firstEvenNumber); // 2