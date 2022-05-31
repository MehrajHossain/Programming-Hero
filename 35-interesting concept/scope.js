function add(first, second) {
  console.log(mood); 
  const result = first + second;
  console.log(result);
  if (result > 9) {
    var mood = 'happy';
    // mood = 'cranky';
  }
  console.log(mood); 
  
}
const sum = add(11,55);

//let const block scope
for (var i = 0; i < 10; i++) {

}
// console.log(i);

//var global scope

//let const local scope
for (var iter = 0; iter < 10; iter++) {

}
console.log(iter);
