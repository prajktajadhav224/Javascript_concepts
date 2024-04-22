// 11) Loop an array of objects and remove all objects which dont have genders value male 


let arrr = [
    {name :"harsh" ,gender:"male"},
    {name :"fdg" ,gender:"male"},
    {name :"dg" ,gender:"female"},
    {name :"dfg" ,gender:"female"},
    {name :"harthjytysh" ,gender:"female"},
    {name :"tyutut" ,gender:"male"},
    {name :"hmmm" ,gender:"female"},
]

// way 1
// let newArr = arrr.filter(function(ele) {
//     return ele.gender === "male";
// })

// console.log(newArr);



var count = 0;
arrr.forEach((ele)=>{
    if(ele.gender !== 'male')
    count++;
});

for (var i = 1; i <= count; i++) {
    for (let j = 0; j < arrr.length; j++) {
        if (arrr[j].gender !== 'male') {
            arrr.splice(j, 1);
            break; // Exit the loop after removing one element
        }
    }
}

console.log(arrr);
