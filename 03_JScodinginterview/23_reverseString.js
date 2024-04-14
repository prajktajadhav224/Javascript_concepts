
let str= "hello"
let stringrev = str.split("").reverse().join("");
console.log(stringrev);


// Using the Spread Operator and reverse()
const strRev = "my name is prajkta";
const strReverse = [...str].reverse().join("");
console.log(strReverse);


// reverse String Without help of Array 
let str1 = "my name is prajkta";
let newString = "";

for (let i = str1.length -1; i >= 0; i--) {
    newString += str1[i];
}
let stringrev1 = newString;
console.log(stringrev1);


// Reverse individual words 
const input = "my name is prajkta";
const words = input.split(' ');
const reverseWord = words.map(word => word.split('').reverse().join(''));
const reverseSentence = reverseWord.join(' ')
console.log(reverseSentence);


// 
function printRev(strs) {
    var list = strs.split(' ').reverse().join(' ');
    console.log(list);
}
printRev("my name is prajkta")