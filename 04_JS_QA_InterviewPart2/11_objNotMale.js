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
let newArr = arrr.filter(function(ele) {
    return ele.gender === "male";
})

console.log(newArr);