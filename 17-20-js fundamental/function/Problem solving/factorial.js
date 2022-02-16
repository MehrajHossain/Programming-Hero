// var factorial =1;
// for(var i = 1; i <= 5; i++) {
//   // console.log(i);
//   factorial = factorial*i;
// }

// console.log('factorial 5 is', factorial);






/* 

//using for loop

function getFactorial(givenNumber) {
  let factorial = 1;
  for (let i = 1; i <= givenNumber; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

var sevenFatorial = getFactorial(7);
console.log('Factorial seven is:' ,sevenFatorial);

var fiveFactorial = getFactorial(5);
console.log('Factorial five is:', fiveFactorial);

*/




/* 

//Using while loop

function getFactorial(givenNumber) {
  let factorial = 1;
  let i = 1;
  while (i <= givenNumber) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}

var sevenFatorial = getFactorial(7);
console.log('Factorial seven is:', sevenFatorial);

var fiveFactorial = getFactorial(5);
console.log('Factorial five is',fiveFactorial);

*/






//using for loop

function getFactorial(givenNumber) {
  let factorial = 1;
  for (let i = givenNumber; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

var sevenFatorial = getFactorial(7);
console.log('Factorial seven is:' ,sevenFatorial);

var fiveFactorial = getFactorial(5);
console.log('Factorial five is:', fiveFactorial);






/* 

//Using while loop (reverse)

function getFactorial(givenNumber) {
  let factorial = 1;
  let i = givenNumber;
  while (i >= 1) {
    factorial = factorial * i;
    i--;
  }
  return factorial;
}

var sevenFatorial = getFactorial(7);
console.log('Factorial seven is:', sevenFatorial);

var fiveFactorial = getFactorial(5);
console.log('Factorial five is',fiveFactorial);

*/





/* 
function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x-1);
}
  console.log(factorial(5)); 
  
 */