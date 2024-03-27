// 4) make this work - [1,2,3,4,5,1,2,3,4,5]


function duplicate(element){
  console.log(element.concat(element));
}
duplicate([1,2,3,4,5])


//2 way 
function duplicate(element){
  return element.concat(element)
  }
  console.log(duplicate([1,2,3,4,5]));