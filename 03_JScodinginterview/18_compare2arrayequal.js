// How to compare two Arrays are Equal or Not in JavaScript


let a = [1, 2, 3, 5];
let b = [1, 2, 3, 5];

function isEqual(a, b) {
    return a.join() == b.join();
}
console.log(isEqual(a, b));