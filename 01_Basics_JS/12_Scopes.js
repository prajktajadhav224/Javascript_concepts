if(true){
    let a =10;
    const b= 20
    var c= 30
}

// console.log(a);    //a is not defined
// console.log(b);   //b is not defined
console.log(c);         //30




//nested scope  

function one(){
    const username ="Prajkta"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // website is not defined
    two()
}
one()