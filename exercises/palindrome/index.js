// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 2 - not ideal solution because it does more iterations
// because it compares the first to the last
// and then the last to the first again
function palindrome(str) {
  // turn string into array
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// Solution 1 - most direct palindrome solution
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//     // This returns a boolean
//   return str === reversed;
// }
