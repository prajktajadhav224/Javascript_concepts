// 9) Loop an array and add all members of it
//add 2 numbers,and last number sum + add next number 


let arr =[1,2,3,4,5,6];
let sum = 0;


// arr.map((ele) => sum += ele)
arr.forEach(function(ele){
    sum += ele;
})

console.log(sum);