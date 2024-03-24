// 11) how to find vowels from string in javascript  (a,e,i,o,u)

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('aebgh'));  //2 



function checkChar(char) {
    ch = char.toLowerCase();
    if(ch =='a' || ch =='e' || ch =='i' || ch =='o' || ch =='u' )
    return console.log("given charactor is vowel");
    return console.log("given charactor is Consonent");
}
checkChar("G")
checkChar("A")







function vowels(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0 ;
}
console.log(vowels("aegggg"))