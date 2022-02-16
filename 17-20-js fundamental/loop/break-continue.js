

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   if (i > 6) {
//     break;
//   }
//   i++;
// }



// for (i = 0; i<10; i++) {
//   console.log(i);
//   if(i > 6) {
//     break;
//   }
// }

var numbers = [36, 43, 73, 98, 104, 82, 68] 

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 90) {
    continue;

  }
  console.log(number);
}
