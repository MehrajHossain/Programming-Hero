const greetings = 'Hello, how are you?';

function reverseString(text) {
  let reverse = '';
  for (const character of text) {
    console.log(character);
    reverse = character + reverse;
  }
}
const reversed = reverseString(greetings);
console.log(reversed);
