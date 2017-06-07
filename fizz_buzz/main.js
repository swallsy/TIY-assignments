
 let number = 1;

function buzzFizz (n) {
 for (n = 0; n <= 100; n++) {

   if (n % 3 && n % 5) {
     return "FizzBuzz";

   } else if (n % 3 === 0) {
     return "Fizz";

   } else if (n % 5 === 0) {
     return "Buzz";

   } else {
     return n;
   }
 }
}

buzzFizz(number);
console.log(number);
