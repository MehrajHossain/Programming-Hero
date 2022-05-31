/* 

1. variable value not assigned
2. function but didn't write return
3. just wrote return but didn't return
4. parameter that isn't passed
5. property that dosen't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined

*/


//1 example
let first;
// console.log(first);


//2 example
function second(x,y) {
  const sum = x + y;
  
}
const result = second(3,91);
// console.log(result); 



// 3 example
function add(a,b){
  const sum = a + b;
  return;
  if(b<10) {
    return
  }
  const fun = a * b;
  return sum;

}

const fourth = add(2,7);
// console.log(fourth);



//4 example
function double(a,b) {
  const result = a*2;
  // console.log(b);
  return result; 
}
double(81);


//5 example
const fifth = {name: 'sogir', age: 15, location: 'Bandarbhan'};
// console.log(fifth.phone);
 

//6 example
const sixth = [54, 12, 41, 3];
// console.log(sixth[4]);



 //7 example
const seventh = [54, 12, 41, 3];
delete seventh[2]
// console.log(seventh[41]);
 
//8 example
const eighth = undefined;
console.log(eighth);
  
