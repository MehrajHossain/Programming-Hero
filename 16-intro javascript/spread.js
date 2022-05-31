const numbers = [23, 65, 98, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
const maxInArray = Math.max(...numbers);

console.log(max, maxInArray);

const numbers2 = numbers;
numbers.push(100);
console.log(numbers,numbers2); 
  