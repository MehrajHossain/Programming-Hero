now = new Date();

console.log(now);
console.log(now.toUTCString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.getFullYear());
console.log(now.getMonth()); // => zero-based months
console.log(now.getDate()); // => one-based days
console.log(now.getDay()); // => oday of week. 0 is Sunday 6 is saturday.
console.log(now.getHours()); // => local time
console.log(now.getMinutes());
console.log(now.getUTCHours()); // hours in UTC time;
