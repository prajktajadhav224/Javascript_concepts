function myfun(a, b) {
  return a + b;
}
console.log(myfun(2, 6));



// Implicit return
const addTwono = (num1, num2) => num1 + num2;
console.log(addTwono(4, 6)); // 10


// explicit return
function numOne(a, b) {
  return a + b;
}
console.log(numOne(6, 8)); //14




// IIFE - immediately invoked function expression
// to avoid global scope pollution we use IIFE
// ()()     (function)()

(function mufun1() {           // Named IIFE
  console.log("IIFE");
})()



(() => {                       // Without named iife
  console.log("IIFE");
})()



((name) => {
  console.log("IIFE");
})("Prajkta");              // Parameterized IIFE





// ARrow Function

() =>{   }




// function passing in array 
const myNewArray= [1,5,3,6,4]

function handleArray(anyarray){
return anyarray[1]
}

console.log(handleArray(myNewArray));




// function passing in Object 
const user= {
  username:"Prajka",
  price:77
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)



let hello = () =>{
  let x = 10;
  console.log(`Value of x is ${x}`);
}
hello();