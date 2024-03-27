// 10) In an array of numbers and strings only add those members which are not strings

let arr =["hhehe",123,"sdddds",1,"sd",2]
let sum = 0;

arr.forEach(function(ele){
    if (typeof ele === 'number') {
        sum += ele;
    }
})

console.log(sum);