// 12) how to reverse a string in Javascript


let str ="hello"
let reverseString = str.split("").reverse().join("");
console.log(reverseString);                //olleh


// Using SPread Operator and reverse()
let strrev ="My Name is Prajkta"
const strReverse = [...strrev].reverse().join("")
console.log(strReverse);        // atkjarP si emaN yM


// Reverse String without help of Array
let str1= "My Name is Prajkta"
let NewString ="";
for (var i = str1.length - 1; i >= 0; i--) {
    NewString += str1[i];
}
let Stringreversev1 = NewString;
console.log(Stringreversev1);              //atkjarP si emaN yM 


// Reverse Individual words
const input = "My Name is Prajkta";
const words = input.split(' ');
let reverseword = words.map(word => word.split('').reverse().join(''));
let reverseSentance = reverseword.join(' ');
console.log(reverseSentance);                // yM emaN si atkjarP




function RevString(strings){
var fword =  strings.split(" ")
fword.reverse();
var revword = fword.join(" ")
console.log(revword);
}
RevString("My name is Prajkta")          // Prajkta is name My