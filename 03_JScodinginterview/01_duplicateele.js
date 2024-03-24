// 1) How To find duplicate elements in array in javascript

const myarray= [1,2,3,5,6,6,5,4]
let duplicate = myarray.filter((ele,index,arr)=> arr.indexOf(ele) == index);
console.log(duplicate);


// (ele) != index       [ 6, 5 ]
//  (ele) == index      [ 1, 2, 3, 5, 6, 4 ]