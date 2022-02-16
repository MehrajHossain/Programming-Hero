//Addition
function addTwoNumbers(number1, number2) {
  var total = number1 + number2;
  return total;
}
var firstNumber = 35;
var seconNumber = 47;

var result = addTwoNumbers(firstNumber, seconNumber);
console.log('Addition result: ', result);


//Subtraction
function subtractTwoNumbers(number3, number4) {
  var total = number3 - number4;
  return total;
}
var firstNumber = 35;
var seconNumber = 47;

var result = subtractTwoNumbers(firstNumber, seconNumber);
console.log('Subtraction result: ', result);



//Multipication
function multiplyTwoNumbers(num1, num2) {
  var result = num1 * num2;
  return result;
}
var total = multiplyTwoNumbers(5,100);
console.log("Multipication result:",total);


//Division
function divisionTwoNumbers(num1, num2) {
  var result = num1 / num2;
  return result;
}
var total = divisionTwoNumbers(100,25);
console.log("Division result:",total);


//Reminder
function reminderTwoNumbers(num1, num2) {
  var result = num1 % num2;
  return result;
}
var total = reminderTwoNumbers(100,30);
console.log("Reminder result:",total);