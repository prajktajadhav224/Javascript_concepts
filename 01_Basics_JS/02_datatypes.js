
// Primptive - 

// string       =   "prajkta"
// numbers      =   1 
// boolean      =   true/false
// NUll         =   empty 
// Undefined    =   not assigned value yet 
// Big Int      =   ...n
// Symbol       =   Symbol("mySymbol");


// Refrence 

// object      =    {....}
// functions   =    function(){  }
// Array       =    [ ]



let myString = "Hello, world!"; // string
let myNumber = 42; // number
let myBoolean = true; // boolean
let myNull = null; // null
let myUndefined = undefined; // undefined
let mySymbol = Symbol("mySymbol"); // symbol
let myBigInt = 123456789n; // bigint
let myfunc = function(){}; // function



//array
const heros =["apple","banana","orange"]

// object
let Object ={
    name:"Prajkta",
    age:23
}

// function 
function myfun(){
    console.log("my fun");
}
myfun()


// _____________Typeof________________________________
console.log(typeof myString); // Output: string
console.log(typeof myNumber); // Output: number
console.log(typeof myBoolean); // Output: boolean
console.log(typeof myNull); // Output: object
console.log(typeof myUndefined); // Output: undefined
console.log(typeof mySymbol); // Output: symbol
console.log(typeof myfunc); // Output: function





// __________________Conversion Operations____________________
let score = 33

console.log(score);
console.log(typeof score);

let valueInString = String(score)
console.log(valueInString);
console.log( typeof valueInString);

let valueInBoolean = Boolean(score)
console.log(valueInBoolean);
console.log( typeof valueInBoolean);


// _______________ Oprations ___________________________

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);


console.log(1 + 1);         // 2
console.log("1" + 1);       // 11
console.log(1 + "1");       // 11
console.log("1" + "1");     // 11
console.log(1 + 1 + 1);     // 3
console.log("1" + 1 + 1);   // 111
console.log(1 + "1" + 1);    //111



console.log(+true);  // true
console.log(+true);  // 1

console.log(false);  // false
console.log(+false);  // 0



let gameCounter = 100
gameCounter ++
console.log(gameCounter);  //101 


// ______________Date________

let MyDate = new Date()
console.log(MyDate);
console.log(MyDate.toString());


