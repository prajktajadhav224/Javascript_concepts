// factor number should exactly divide the number (with 0 remainder)

// 16) How to find factor of a given integer in javascript

let n = 12; 
let i = 1; 
for (i = 1; i < n; i++) { 
    if (n % i == 0) { 
        console.log(i); 
    } 
} 
console.log(n);


// 1
// 2
// 3
// 4
// 6
// 12