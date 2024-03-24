// 21) how to convert first letter of string in uppercase


let myName = "prajkta"
let letter = myName.substring(0,1).toUpperCase();
let letter2 = myName.substring(1)
let letter3 = letter.concat(letter2)
console.log(letter3);  // Prajkta

// way 2
let res = myName.substring(0, 1).toUpperCase() + myName.substring(1);
console.log(res);  // Prajkta