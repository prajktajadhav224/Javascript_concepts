// 1) How check if an object is an array or not 



function checkisArray(ele) {
    return Array.isArray(ele)
}

console.log(checkisArray([]));
console.log(checkisArray({}));