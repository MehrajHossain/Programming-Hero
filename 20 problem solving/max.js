//by Math function

const A = 10;
const B = 20;
const C = 30;
console.log('Largest number is', Math.max(A, B, C));



//by if else

const A = 10;
const B = 20;
const C = 30;


if(A>B) {
  if(A>C) {
    console.log('A is Largest Number');
  }
  else {
    console.log('C is Largest Number');
    
  }
}
else {
  if (B>C) {
    console.log('B is Largest Number');
  }
  else {
    console.log('C is Largest Number');

  }
}





//by else if

const A = 10;
const B = 20;
const C = 30;
if (A>B && A>C) {
  console.log('A is Largest Number');
}
else if (B>C && B>A) {
  console.log('B is Largest Number');
}
else {;
  console.log('C is Largest Number');
}




//by function
function findLargest(first, second, third) {
  if (first > second) {
    if (first > third) {
      return first;
    } 
    else {
      return third;
    }
  } 
  else {
    if (second > third) {
      return second;
    }
      else {
        return third;
      }
  }
}


const largest = findLargest(10, 20, 30);
console.log(largest);