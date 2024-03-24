// 20) how to find union of two arrays in javascript

// union of set - unique element of set a and set b

var myarr = [1,3,5,6,7,8,8];
var myarr2 = [1,5,4,9,9];

let unionArr = [...new Set([...myarr, ...myarr2])];

console.log(unionArr);
// [
//     1, 3, 5, 6,
//     7, 8, 4, 9
//   ]