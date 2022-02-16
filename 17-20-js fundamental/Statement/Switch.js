var color = 'green';

switch (color) {
  case 'red':
    console.log('blue');
    break;
  case 'blue':
    console.log('blue');
    break;
  case 'yellow':
    console.log('yellow');
    break;
  case 'green':
      console.log('green');
    break;
  default:
    console.log('black');

}





date = new Date();
// 0 - Sunday, 1 - Monday, 2 - Thusday
today = date.getDay(); // Today call Function

switch (today) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Not a Valid Number");
}


