// 5) write a javascript function that reverse a number 

function reverseNumber(num){
    let rev = num.toString().split("").reverse().join("")
    return Number(rev)
}

console.log(reverseNumber(12345));
