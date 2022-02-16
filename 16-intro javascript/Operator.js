//  ***Operators of javascript***
// 1 Arithmetic operators(+,-,*,/,//,%.**)
a = 10
b = 3
//  Addition
console.log(a + b)

//  Subtraction
console.log(a - b)

// Multiplication
console.log(a * b)

//  Division
console.log(a / b)

//  Flor division
// console.log(a//b)

//  Modulas(reminder)
console.log(a % b)

//  Power
console.log(a ** b)

// 2 Comparison operators (<,>,<=,>=,==,!=)

console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b)
console.log(a != b)





//  3 Identity Operators ===, !==
//To be precise, === checks whether two variables reference the same object, or in case of value types (like int , double , String , bool , etc.) if they both have the same value.

c = 50
d = "50"

console.log(c == d)
console.log(c != d)
console.log(c === d) //check Dataype and value(====,!==)
console.log(c !== d)

var array1 = [5, 6, 7];
var array2 = [5, 6, 7];
var array3 = array2;

console.log(array1 === array2) // -> false
console.log(array1 == array2) // -> false

console.log(array2 === array3) // -> true
console.log(array2 == array3) // -> true
// Both array1 and array2 have the same type and they are equal but comparison array1 === array2 returns false as they refer to different objects. array2 === array3 returns true as both variables refer to the same object.







//  4 Assaignment operators =,+=,-=,*=,/=
a = a + 2
console.log(a)
a += 2
console.log(a)


a = a - 2
console.log(a)
a -= 2
console.log(a)


a = a * 2
console.log(a)
a *= 2
console.log(a)

// 5 Logical Operators &&,||,!

// 6 Bitwise Operator &,|,~,^,<<,>>
