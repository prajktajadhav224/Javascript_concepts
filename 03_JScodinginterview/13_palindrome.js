// palindrome String - reverse of the string is the same as the string 


function isPalindrome(str){
 const reversestr = str.split('').reverse().join('');
 return str === reversestr;
}

console.log(isPalindrome("ABCDDCBA"));
