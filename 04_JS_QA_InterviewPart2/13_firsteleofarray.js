

function printDefaulArray(num, n = 1) {
    if(n <= num.length){
        for(let i = 0; i < n; i++){
            console.log(num[i]);
        }
    }
}

printDefaulArray([1,2,3,4,5,6],5)