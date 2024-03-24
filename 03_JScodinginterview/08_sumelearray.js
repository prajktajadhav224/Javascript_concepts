// 8) How to find the sum of all elements in array in Javascript

let arr = [86,41,55,44,33,22,66]

let sum = 0;
for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
}

// way 2 
let sum2 = arr.reduce(function(x,y) {
    return x + y;
},0)

console.log(sum2);


