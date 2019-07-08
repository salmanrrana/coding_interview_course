// // --- Directions
// // Given a string, return the character that is most
// // commonly used in the string.
// // --- Examples
// // maxChar("abcccccccd") === "c"
// // maxChar("apple 1231111") === "1"
//
// // Solution 1
// // Common variations of this questions
// // What is the most common characher in the string?
// // Does string A have the same characters as string?
// // Does the given string have any repeated characters in it?
//
// // take the string and convert it into an object
// // 'keys' are character of a string and 'values' are the
// // number of times they appear in a string
// function maxChar(str) {
//   // create empty object
//   const charMap = {};
//   // to find the character most used
//   let max = 0;
//   let maxChar = '';
//
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   // since we are iterating in the object we use the "For In"
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//
//   return maxChar;
// }
//
// module.exports = maxChar;

// **************SECOND ROUND**************

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// SOLUTION
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = "";
//
//   // This will iterate over the string
//   for (let char of str) {
//     // This will take each letter of the string and put it in the object "chars".
//     // If the charMap[char] returns null, it will return 1 for the chars[char]
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   // Now we need to iterate over the object and see which character is used most
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       // now set new value of max if charMap[char] is higher
//       max = charMap[char];
//       // now set new value of maxChar if charMap[char] is higher
//       maxChar = char;
//     }
//   }
//   //if it is not higher return
//   return maxChar;
// }

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
