const numbers = [32, 48, 56, 16, 23, 37, 8];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
  let element = numbers[i];
  sum = sum + element;
}
console.log('Sum of array:', sum);




//By function
function arrayTotal (numbers) {
  let sum = 0; 
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
    // return sum;   //-> *Mistake
  }
  return sum;
}

const total = arrayTotal([33, 32, 35]);
console.log('Sum of array:',total);
