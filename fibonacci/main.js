let sum = 0;
let a = 1;
let b = 1;
let c = 1;

while (c <= 4000000) {
  if (isEven(c)) {
    sum = sum + c;
  }
  a = b;
  b = c;
  c = a + b;
}

function isEven(n) {
  if (n % 2 === 0){
    return true;
  } else {
    return false;
  }
}

console.log(sum);
