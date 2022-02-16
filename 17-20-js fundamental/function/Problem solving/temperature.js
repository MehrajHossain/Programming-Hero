// c/5 = (f-32)/9

function celsiusToFarenheit(celsius) {
  var farenheit = (celsius*9/5) + 32;
  return farenheit;

}


var givenCelsius = 45;
var convertFarenheit = celsiusToFarenheit(givenCelsius);
console.log(convertFarenheit);




//Farenhit to Celsius
function FarenheitToCelsius(farenheit) {
  var celsius = (farenheit-32)*5/9;
  return celsius;

}


var givenFarenheit = 113;
var convertCelsius = FarenheitToCelsius(givenFarenheit);
console.log(convertCelsius);
