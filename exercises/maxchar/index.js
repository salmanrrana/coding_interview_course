// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 1
// Common variations of this questions
// What is the most common characher in the string?
// Does string A have the same characters as string?
// Does the given string have any repeated characters in it?

// take the string and convert it into an object
// 'keys' are character of a string and 'values' are the
// number of times they appear in a string
function maxChar(str) {
  // create empty object
  const charMap = {};
  // to find the character most used
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  // since we are iterating in the object we use the "For In"
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
