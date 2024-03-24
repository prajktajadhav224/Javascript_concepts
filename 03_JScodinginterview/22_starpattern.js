// 22) How to print star pattern in diamond shape in js

// 1
let n = 5; 

for (let i = 1; i <= n; i++) { 
    let str = "*"; 
    console.log(str.repeat(i * 2 - 1)); 
} 



//2
for (let i = 1; i <= n; i++) { 
    let str = "*"; 
    let space = ' '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
} 


//3
for (let i = 1; i <= n; i++) { 
    let str = "*"; 
    let space = ' '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
} 

for (let i = n - 1; i >= 1; i--) { 
    let str = "*"; 
    let space = ' '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
} 