// JavaScript to print Odd Numbers within a Range!
function oddNumber(A,B) {
  var number = A;
   while (number <= B) {
     if (number % 2 == 1) {
     }
     number++
   }
   return number;
 }
 
 var getOddNumber = oddNumber(7,19);
 console.log(getOddNumber);
 
 
 // number = 6;
 //   while (number <= 20) {
 //     if (number % 2 == 1) {
 //       console.log(number);
 //     }
 //     number++;
 //   }
 