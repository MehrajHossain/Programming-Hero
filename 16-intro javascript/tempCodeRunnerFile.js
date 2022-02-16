var array1 = [5, 6, 7];
var array2 = [5, 6, 7];
var array3 = array2;

console.log(array1 === array2) // -> false
console.log(array1 == array2) // -> false

console.log(array2 === array3) // -> true
console.log(array2 == array3) // -> true