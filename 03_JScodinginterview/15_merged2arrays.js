// 15) how to merged two arrays in javascript

let myArray = [2,4,6,8];

let myArray2 =[5,4,3,7];

// using concat 

let concateArray = myArray.concat(myArray2)
console.log(concateArray);

// using spread operator 
let result = [...myArray , ...myArray2]
console.log(result);

// sort array
let sortedArray = concateArray.sort()
console.log(sortedArray);