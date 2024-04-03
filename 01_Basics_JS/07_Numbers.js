
const Balance = new Number(10000000);
console.log(Balance);  // [Number: 10000000]
console.log(typeof Balance);  // object

console.log(Balance.toString());
console.log(typeof Balance.toString());   // string
console.log(Balance.toFixed(2));   // 10000000.00
console.log(Balance.toExponential(2));
console.log(Balance.toLocaleString());  // 1,00,00,000
console.log(Balance.toLocaleString('en-IN'));  // 1,00,00,000
console.log(Balance.toPrecision(3));  //1.00e+7