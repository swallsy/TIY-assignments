
function findMultiples() {
  let sum = 0;
  let n = 0;
  while (n < 1000)  {
    if (n % 3 === 0 || n % 5 === 0 ) {
      sum += n;
    }
     n++;
  }
  return sum;
}

findMultiples();