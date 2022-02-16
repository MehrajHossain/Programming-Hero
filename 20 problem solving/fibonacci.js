/* 

ith = (i-1)th + (i-2)th
const fibo = [0,1]
for (let i = 2; i<=10; i++) {
  fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);


*/

/* 

function fibonacciSeries(num) {
  const fibo = [0,1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  return fibo;
}

const fiboSeries = fibonacciSeries(15);
console.log(fiboSeries);

 */


// input correction
function fibonacciSeries(num) {
  if(typeof num != 'number'){
    return 'String not allowed'
  }
  if (num<2) {
    return 'Please provide a value that is bigger than or equal two.'
  }

  const fibo = [0,1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  return fibo;
}

const fiboSeries = fibonacciSeries('5');
console.log(fiboSeries);






