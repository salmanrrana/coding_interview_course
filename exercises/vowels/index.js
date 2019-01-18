// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// SOLUTION 2 - using REGEX
function vowels(str) {
  // look at the string and use the match method on the string
  // match is used to see if thing passed into it is contained withing whatever we are calling it on
  // "g" will not stop at the first match
  // "i" stands for insensitive - or case insensitive
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Solution 1 - iterative solution
// function vowels(str) {
//   // create a counter variable and initialize wth 0
//   let count = 0;
//   // make a string of all the vowels we want to consider
//   //using a string isnt the most clear way of coding it out - it can be used
//   // const checker = "aeiou";
//   // we will use an array
//   const checker = ["a", "e", "i", "o", "u"];
//   // iterate through all the characters insode of string
//   // we also want to make sure to find all capital letters as well
//   for (let char of str.toLowerCase()) {
//     // check to see if we are working with a vowel
//     // if character is included in the chaecker,
//     if (checker.includes(char)) {
//       // we will increment the counter
//       count++;
//     }
//   }
//
//   // now at end we will return counter
//   return count;
// }

module.exports = vowels;
