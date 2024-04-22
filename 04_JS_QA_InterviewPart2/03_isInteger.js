// 3) how would you check if a number is an integer 


function numberIsInteger(element) {
    console.log(element % 1 === 0 ? "Value is Integer" : "Value is Not Integer");
}
numberIsInteger(12.2)


var a= 12
if(a % 1 ==0){
    console.log("Integer");
}
else{
    console.log("Not integer");
}