let sum =0;
let number  = 9474;

let temp = number;

while (temp > 0 ) {
    let remainder =  temp % 10;
    sum += remainder * remainder * remainder * remainder
    temp = parseInt(temp / 10)
    console.log(temp);
}

console.log(sum == number ? "Armstrong Number" : "Not an Armstrong Number");