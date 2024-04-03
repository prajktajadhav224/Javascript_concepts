
// String Interpolation 

const id= 123;
const name= "prajkta";

console.log(`My roll number is ${id} , my name is ${name}`); 


// **************** String ********************

let text1="str1"
let text2 = "str2"
let text3 = text1.concat(" ", text2)
let text4 = text1.localeCompare(text2)   // returns sort order -1 ,1 or 0 (for before, after or equal)
console.log(text3);
console.log(text4);

let message ="hello world , welcome to the universe";
let text = message.constructor;          // [Function: String]
console.log(text);   
console.log(message.length);
console.log(message.charAt(2));      //l  specified index (position)
console.log(message.charCodeAt(2));   //Unicode value of the character at the specified location
console.log(message.endsWith("universe"));   // true/false
console.log(message.startsWith("hello"));    // true/false
console.log(message.includes("welcome"));  // returns true if string contains a specified string
console.log(message.indexOf("w"));     //without spacing index , Returns the position of the first occurrence of a substring.
console.log(message.lastIndexOf("t"));   // Returns the last occurrence of a substring in the string.
console.log(message.repeat(2));             //Returns a String value that is made from count copies appended together.
console.log(message.replace("Hello" ,"welcome"));  // doesnot change original string returns a new string 
console.log(message.replace(/Hello/g ,"blue"));   // g -global  gi-  global insensitive
console.log(message.replace("HELLO" ,"w3schools"));   // method is case sensitive   
console.log(message.replaceAll("Hello" ,"w3schools"));
console.log(message.search("to"));  // 21 index (position) of the first match, case sensitive. regturns -1 if no match found 
console.log(message.slice(0,5));    // first 5 position     // string.slice(start,end)
console.log(message.slice(5));      // position 5 to the end
console.log(message.split(" "));    // split by spaces. splits a string into array of substrings
console.log(message.split(/[,;]/));   // splits a string by a regex
console.log(message.substring(0,5));      // The substring includes the characters up to, but not including, the character indicated by end
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.toLocaleLowerCase());   // the locale is based on the language setting of the browsers
console.log(message.toLocaleUpperCase());
console.log(message.toString());
console.log(message.trim());   // Removes white space and line terminator characters from a string.
console.log(message.trimStart()); // Removes white space and line terminator characters from a start string.
console.log(message.trimEnd());  //Removes  white space and line terminator characters from a End string.