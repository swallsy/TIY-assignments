let sum = 0;
let number = 0;

// Define a function that loops through numbers 1-100. Runs the number through the isMultiple function. If true, adds to sum.
function findMultiples(i) {
  for (i=0; i <= 1000; i++) {
    if (isMultiple(i)) {
      sum = sum + i;
    }
  }
}

// function checks if the number is a multiple of 3 or 5

function isMultiple (n) {
 if (n % 3 === 0 || n % 5 === 0) {
     return true;
 }  else {
   return false;
    }
}

findMultiples(number);
console.log(sum);
