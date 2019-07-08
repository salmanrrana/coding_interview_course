// // --- Directions
// // Write a function that accepts a string.  The function should
// // capitalize the first letter of each word in the string then
// // return the capitalized string.
// // --- Examples
// //   capitalize('a short sentence') --> 'A Short Sentence'
// //   capitalize('a lazy fox') --> 'A Lazy Fox'
// //   capitalize('look, it is working!') --> 'Look, It Is Working!'
//
// // Solution 2 - For Loop and a little more challenging
// // create an empty string called 'result'
// // for each character in the string
// // if the character to the left a spaces
// // capitalize it and add it to the "result"
// // else
// // add it to "result"
//
// function capitalize(str) {}
//
// module.exports = capitalize;
//
// // Solution 1 - concise with javascript library
// // Make an empty array "words"
// // Split the input string by spaces to get an array
// // for each word in the array uppercase the first letter of the words
// // Join first lettewr with the rest of the string (word.slice(1))
// // word.slice will give me everything of element at index 1 on to hte last character of the word
// // Push result into "words" array with words.push()
// // Join "words" into a string and return it with a space character
//
// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

// **************SECOND ROUND**************

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// SOLUTION 1
// function capitalize(str) {
//   // create empty array
//   const words = [];
//
//   // loop through each word in the string
//   // we will split the string by each word with split(" ")
//   // empty space will split into array by the empty space
//   for (let word of str.split(" ")) {
//     // word[0].toUpperCase() will uppercase to take first character of each word and uppercase it
//     // word.splice(1) will remove the first character of the word
//     // once we have those results we will push that into the words array we declared at the beginning of the function
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   // we will then take the words array and join them together
//   // into a single array and place a space in-between each word
//   return words.join(" ");
// }

// NOT THE BEST SOLUTION since it could possibly not work in other languages
function capitalize(str) {
  // create an variable with the first character of the string uppcased
  let result = str[0].toUpperCase();

  // use classic FOR LOOP since we are iterating from the second character (i = 1)
  for (let i = 1; i < str.length; i++) {
    // look to the left of the current position
    // if that is an empty space
    if (str[i - 1] === " ") {
      //take the current letter we are iterating over and uppercase it and
      // add it to the result string with result +=
      result += str[i].toUpperCase();
    } else {
      // add that current letter to result
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
