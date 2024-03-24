// 5) what is difference between Filter and Find method

var employee= [
    {name:"ab", age:"33"},
    {name:"abc", age:"64"},
    {name:"praj", age:"17"},
    {name:"joy", age:"11"},
    {name:"john", age:"21"},
    {name:"ram", age:"32"},
    {name:"sham", age:"44"},
    {name:"sita", age:"65"},
    {name:"gita", age:"35"},
    {name:"tom", age:"44"},
    {name:"thom", age:"33"},
    {name:"ronny", age:"22"},
]

const filterItem=  employee.filter((item)=> item.age >30)
console.log(filterItem);

const findItem=  employee.find((item)=> item.age >30)
console.log(findItem);