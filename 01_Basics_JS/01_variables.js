// let,var ,const 
// variables are continer fo storing data 


const accountID= 123
let email = "prajkta@google.com"
var username="Prajkta"

console.log(accountID);


// Use var if you want function-scopes variables that can be hoisted 
// Use let if you want block scoped variables that can be reassigned 
// Used const if you want blockscoped variables that are constant amd cannot be reaasinged 


// Var Keywords

var a = 10;
function f(){
    console.log(a);//10
}
f()
console.log(a); //10


function f(){
    var a = 10;
    console.log(a);
}
f()
console.log(a); //ReferenceError: a is not defined



// let 
let a = 10;
function f(){
    let b = 20;
    console.log(a);//10
    console.log(b);//20
}
f()


let a = 10;
function f(){
    let a = 9;
    console.log(a);   //9
}
f()
console.log(a);  //10

// const 

const a = 10;
function f(){
     a = 9;
    console.log(a);   // TypeError: Assignment to constant variable. 
}
f()




// The scope of a -
// var -   
//-functional or global scope.	
//-updated and re-declared
//-Variable are hoisted

// let -   
// -block scope.	
// -Updated but cannot be re-declared
// - variable are hoisted but it cannot be used until it has been declared 


// const - 
// -block scope
// -neither be updated or re-declared 
// - variable are hoisted but it cannot be used until it has been declared 
