

const mySym =  Symbol("key1")
const JsUser = {
    name:"Prajkta",
    age:"26",
    [mySym]:"mykey1",
    location:"Nashik",
    email:"Prajkta@google.com",
    isloggedIn:false,
    LastLoggedIn:["monday", "sunday"]
}

console.log(JsUser.LastLoggedIn);
console.log(JsUser.name);

console.log(JsUser[mySym]); // mykey1 
console.log(JsUser);        //[Symbol(key1)]: 'mykey1'




// Object Destructing 
const Course = {
    coursename: "Javascript",
    Prize:555,
    CourseInstructor :"Prajkta"
}

// Course.CourseInstructor
const {CourseInstructor} = Course
console.log(CourseInstructor);

console.log(Object.keys(Course));
console.log(Object.values(Course));
console.log(Object.entries(Course));

console.log(Course.hasOwnProperty("coursename"));





const ages1 = { 1: "fhgfh", 2: "rdter" }
const ages2 = { 3: "thgfh", 4: "ygjuytu" }
const ages3 = { 5: "fghtfh", 6: "tyrtyrt" }

// let obj4= { ...ages1,...ages2,...ages3}
let obj4 = Object.assign({}, ages1,ages2,ages3)
console.log(obj4);






const user= {
    username:"Prajka",
    price:77
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)