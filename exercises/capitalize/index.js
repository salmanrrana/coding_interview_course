// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 2 - For Loop and a little more challenging
// create an empty string called 'result'
// for each character in the string
// if the character to the left a spaces
// capitalize it and add it to the "result"
// else
// add it to "result"

function capitalize(str) {}

module.exports = capitalize;

// Solution 1 - concise with javascript library
// Make an empty array "words"
// Split the input string by spaces to get an array
// for each word in the array uppercase the first letter of the words
// Join first lettewr with the rest of the string (word.slice(1))
// word.slice will give me everything of element at index 1 on to hte last character of the word
// Push result into "words" array with words.push()
// Join "words" into a string and return it with a space character

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}
