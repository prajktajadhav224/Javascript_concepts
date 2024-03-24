// 7) how to find even or odd numbers in array in javascript

let numbers = [2,4,5,6,7,8,22,32,86,55]

let evenNumber = numbers.filter((ele) => ele %2 ==0)
console.log(`Even Numbers ${evenNumber}`);

let oddNumber = numbers.filter((ele) => ele %2 !=0)
console.log(`Odd Numbers ${oddNumber}`);