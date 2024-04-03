
// for of
// for (const iterator of object) {
    
// }

let arr=[1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}



// map

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")

console.log(map);


// for each

const Coding =["js","html","css"]
Coding.forEach( function(item){
console.log(item);
})


// filter 

const myNumber= [1,2,3,4,5,5,6,7,7,8,9]

const newNums = myNumber.filter((num) =>(num > 4))
console.log(newNums);





const myNum= [1,2,3,4,5,5,6,7,7,8,9]
const newNum = myNum.map((num) =>num *10)
.map((num) => num + 1)
.filter((num) => num >= 40)
console.log(newNum);