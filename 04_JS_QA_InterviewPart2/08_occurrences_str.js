// 8) write a Javascript function to get the number of occurrences of each letter in specified string 
// (apple  --- a=1 , p= 2 l=1  e=1 )



function strOcuurances(str){
    var obj = {}; 
     str.split("").forEach(element => {
        if(obj.hasOwnProperty(element) === false){
            obj[element] = 1;
        }
        else{
            obj[element]++;
        }
    });
     return obj;
}

console.log(strOcuurances("apple"));
