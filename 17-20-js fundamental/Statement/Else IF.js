/*


**General structure of Else IF statement


if (condition) {
  Execute code block #1
}
else if (condition) {
  Execute code block #2
}
else if (condition) {
  Execute code block #3
}
..........................

else {
  If all else fails, execute this block
}


*/



a = 20;
b = 20;

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("b is greater than a");
} else {
  console.log("They both are same");
}

//  Even or Odd

n = 0;

if (n == 0) {
  console.log("n is Zero");
} else if (n % 2 == 0) {
  console.log("n is even Number");
} else {
  console.log("n is Odd number");
}
