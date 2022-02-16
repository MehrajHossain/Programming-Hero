const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

// By for loop
/* 

function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    // console.log(element);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

*/


// By for of loop --> 

function removeDuplicate(names) {
  const unique = [];
  for (const element of names) {
    // console.log(element);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;

} 





const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);