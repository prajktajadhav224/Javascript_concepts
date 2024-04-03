

if(2 == 2){
    console.log("Operator");
}


// < , > <= , >= , ==,=== , !=, !==


const temp = 31;

if (temp > 20) {
    console.log("Less than");
}


if (temp < 20) {
    console.log("Less than");
} else {
    console.log("gretter than");
}



// if else
// switch
// while
// do while


for (let index = 0; index <= 10; index++) {
    const element = index; 
    console.log(element);
}


for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Loop Vallue ${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`Inner loop${j}`);
       console.log(i +'*' +j +'='+ i*j);
    }
}



// while
let myArr=[1,2,3,4,5]
let arr=0;

while (arr < myArr.length) {
    console.log(`value of ${myArr[arr]}`);
    arr = arr + 1;
}



// do while
let score = 11
do {
    console.log(`Value of ${score}`);
    score ++
} while (score<= 10);

