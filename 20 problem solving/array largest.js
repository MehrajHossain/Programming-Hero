function largestElement(numbers) {
  let largest = numbers[0];  // for largest , smallest initial value must be index[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const age = [15, 30, 24, 42, 16, 31];
const older = largestElement(age);
console.log('oldest guy', older);

const planChild = [-8, -3, -12, -17];
const firstBorn = largestElement(planChild); 