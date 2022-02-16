// Array 
var friendsAge = [11, 13, 17, 15]
var heroine = ['ema stone', 'jenifer lorence', 'cristan dust', 'gal gadot'];
var vowels = ['a', 'e', 'i', 'o', 'u']


// Array length 
console.log(vowels.length);


//Array Index
console.log(vowels.indexOf('e'))
console.log(heroine.indexOf('jenifer lorence'))
console.log(vowels.indexOf('position-nai'));

//index 
console.log(vowels[4]);  // b

// change index
vowels[4] = 3;
console.log(vowels);  //[ 'a', 'e', 'i', 'o', 3 ]


//1 to 3 position k k asse
console.log(vowels.slice(1,4)) 

//last 3 elements
console.log(vowels.slice(-3));
console.log(vowels.slice(3));


