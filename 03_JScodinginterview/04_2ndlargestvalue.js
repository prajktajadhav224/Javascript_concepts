// 4) How To find second Largest value in array

let myArr = [10,20,30,40,50,60]

let largestvalue = Math.max(...myArr)
console.log(`Largest Value ${largestvalue}`);

let index = myArr.indexOf(largestvalue)
myArr.splice(index, 1)
let secondlargestvalue = Math.max(...myArr)
console.log(`Second Largest Value ${secondlargestvalue}`);