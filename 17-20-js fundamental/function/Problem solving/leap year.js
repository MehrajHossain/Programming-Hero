function isLeapYear(year) {
  if(year % 4 == 0) {
    return true;
  }
  return false;
}

const myYear = 1996;
const isMyYear = isLeapYear(myYear);
console.log('is my year leap year?', isMyYear);
