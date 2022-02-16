S = "Hello world";
m = "Hello world";
console.log(S);
console.log(typeof S);
console.log(S.length);
console.log(S.charAt(0));
console.log(S[0]);
console.log(S.charAt(S.length - 1)); // => "d": the last character.
console.log(S[S.length - 1]);
console.log(S.substring(1, 4)); // => "ell": the 2nd, 3rd and 4th characters.
console.log(S.slice(1, 4)); // => "ell": same thing
console.log(S.slice(-3)); // => "rld": last 3 characters
console.log(S.indexOf("l")); // => 2: position of first letter l.
console.log(S.lastIndexOf("l")); // => 9: position of last letter l.
console.log(S.indexOf("l", 3)); // => 3: position of first "l" at or after 3
console.log(S.split(" ")); // => ["hello" "world"] split into substrings
console.log(S.replace("H", "h"));
console.log(S.toUpperCase());
console.log(S.toLowerCase());


//Strings are immutable in ECMAScript, meaning that once they are created, their values cannot change. To change the string held by a variable, the original string must be destroyed and the variable filled with another string containing a new value..
