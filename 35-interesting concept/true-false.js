/*
Falsy:
false
zero
empty string
undifined
nyull
NaN


====================


Truthy:
true
Any number positvie or negative except zero
Any srring included white space
empty array []
empty object {}




Anything else that is not falsy will be truthy
*/


let x = [];
console.log('value of x', x);
if (x) {
  console.log('variable is truthty', x);
}
else {
  console.log('variable is falsy');
} 