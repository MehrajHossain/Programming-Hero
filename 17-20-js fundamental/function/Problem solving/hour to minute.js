function getMinute(hour) {
  var minute = hour*60;
  return minute;
}
var givenHour = getMinute(4);
console.log(givenHour);

var myHour = 3.5;
var myHourToMinute = getMinute(myHour);
console.log('Hour to minutes:', myHourToMinute);