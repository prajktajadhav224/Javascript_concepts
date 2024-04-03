// ___________Memories_____________

// 1. stack (Primptive)
// 2. Heap  (Non - Primptive)

// stack (Premtive like Number, String) , heap (Non-premptive -like object, functions)

// if we declare variable it will return copy of that object
// stack

let str = "hello";
let newStr = str;
newStr = "my new hello string";
console.log(str);  //hello
console.log(newStr);   //my new hello string


// heap
// it will direct change original content and return it
let customer = { email: "name@gmail.com", id: "123" };
let customerTwo = customer;

customerTwo.email  = "mynewemail@gmail.com"; 
console.log(customerTwo);  //{ email: 'mynewemail@gmail.com', id: '123' }
console.log(customer);// { email: 'mynewemail@gmail.com', id: '123' }
