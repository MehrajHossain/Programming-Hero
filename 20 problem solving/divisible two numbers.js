// Print all numbers divisible by m & n between A and B
// Print all numbers divisible by 3 & 5 between 1 and 50

/* 

//by function
function divisibleAB(A, B, m, n) {
  for (var numbers = A; numbers <= B; numbers++) {

    if (numbers % m == 0 && numbers % n == 0) {
      console.log(numbers);
    }
  }
  return numbers;
}
console.log(divisibleAB(1,50,3,5));


//by for loop
for (var numbers = 1; numbers <= 8; numbers++) {

  if (numbers % 4 == 0 && numbers % 2 == 0) {
    console.log(numbers);
  }
}


*/









//***Print 'foo bar' All numbers between 1 and 50 are divisible by 3 and 5 When only divisible by 3 Print 'foo' When only divisible by 5 Print 'bar'

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('foo');
  } 
  else if (i % 3 == 0) {
    console.log('bar');
  } 
  else if (i % 5 == 0) {
    console.log('foobar')
  } 
  else {
    console.log(i);
  }
}