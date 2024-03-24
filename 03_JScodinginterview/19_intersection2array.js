// 19) how to find intersection of two arrays in javascript
// common numbers between two arrays


var myarr = [1,3,5,,6,7,8,4];
var myarr2 =  [1,5,7,4,9]

let intersectionArr= myarr.filter((ele) => myarr2.includes(ele))
console.log(intersectionArr);  // [ 1, 5, 7, 4 ]