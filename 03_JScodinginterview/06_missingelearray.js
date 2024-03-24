// 6) How to Find missing elements in a given Array 1 to 10


let arrayNumber = [1,2,3,4,7,9,10]

const missArray=[];

const missvalue = (arr)=>{

    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);

    for(let i = minValue ; i<maxValue; i++){
        if (arr.indexOf(i) < 0) {
            missArray.push(i)
        }
    }
    return missArray;
}

console.log(missvalue(arrayNumber));        // [ 5, 6, 8 ]