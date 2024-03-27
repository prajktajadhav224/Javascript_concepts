// 7) write a javascript function that accepts a string as a parameters and converts the first letter of each word of the string in uppper case

function capitalizationecah(myStr){
    let words = myStr.split(" ")
    .map(function(word){
       return word.charAt(0).toUpperCase() + word.substring(1) 
    })

    return words.join(" ")
}

console.log(capitalizationecah("my name is prajkta")); 


