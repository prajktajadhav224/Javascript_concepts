// 5) write a javascript function that reverse a number 


// 1way 
// uncomment to try this code 

// function reverseNumber(num){
//     let rev = num.toString().split("").reverse().join("")
//     return Number(rev)
// }

// console.log(reverseNumber(12345));



// 2way
function revnum(num) {
    var rev =0;
while (num > 0) {
    let rem = num % 10;
    rev = rev*10+rem;
    num = Math.floor(num/10)
}
    return rev;
}

console.log(revnum(45678));