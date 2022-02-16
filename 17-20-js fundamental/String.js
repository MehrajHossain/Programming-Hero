first = "Hello world";
second = "How are you";
third = ['i', 'love', 'you']
// console.log(first);
// console.log(typeof first);
// console.log(first.length);
// console.log(first.charAt(0));
// console.log(first[0]);
// console.log(first.charAt(first.length - 1)); // => "d": the last character.
// console.log(first[first.length - 1]);
console.log(first.substring(1, 4)); // => "ell": the 2nd, 3rd and 4th characters.
// console.log(first.slice(1, 4)); // => "ell": same thing
console.log(first.slice(-3)); // => "rld": last 3 characters
// console.log(first.indexOf("l")); // => 2: position of first letter l.
// console.log(first.lastIndexOf("l")); // => 9: position of last letter l.
// console.log(first.indexOf("l", 3)); // => 3: position of first "l" at or after 3
// console.log(first.split(" ")); // => ["hello" "world"] split into substrings
// console.log(firatString.replace("H", "h"));
// console.log(first.toUpperCase());
// console.log(first.toLowerCase());
// console.log(first.concat(second));
console.log(third.join('❤️ '));






// substr() একটা পজিসন থেকে শুরু করে যতগুলা বলা হবে  ততগুলা অক্ষর রিটার্ন করবে।
// slice() একটা পজিসন থাকে শুরু কর আরেকটা পজিশনে যতগুলা অক্ষর আছে সব রিটার্ন করবে।
// split() একটা স্ট্রিং কে ছোট ছোট সাবস্ট্রিং এর অ্যারে তে ভাগ করে দেয়।

//Strings are immutable in ECMAScript, meaning that once they are created, their values cannot change. To change the string held by a variable, the original string must be destroyed and the variable filled with another string containing a new value.
