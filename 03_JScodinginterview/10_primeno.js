// prime - divide by itself or 1

// prime no or not
function isPrime(num) {
  let res = true;
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      res = false;
      break;
    }
  }
  if (res) {
    console.log("Prime Number");
  } else {
    console.log("Not Prime Number");
  }
}
isPrime(13);

// 0 to 100 prime no

function isPrime1(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
for (var i = 1; i < 100; i++) {
    if (isPrime1(i)) {
        console.log(i);
    }
}
