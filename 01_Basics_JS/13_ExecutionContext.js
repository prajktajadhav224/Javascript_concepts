// Execution Context
// 1) Global Execution Context
// 2) Functional Execution Context
// 3) Eval Execution context 


// Memory Creation phase 
// Execution phase 

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(30, 32)


// Memory Creation phase 

val1  <- undefined 
val2  <- undefined 
addNum  <- undefined 
result1  <- undefined 
result2  <- undefined 


// Execution phase 
val1  <- 10 
val2  <- 5 
addNum  <- total  
total = num1 + num2