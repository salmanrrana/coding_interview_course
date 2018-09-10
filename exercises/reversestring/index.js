// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 3 cleaned up
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

//solution 1
// function reverse(str) {
//   // turn str into array
//   const arr = str.split('');
//   // call "reverse" method on the array
//   arr.reverse();
//   // join the array back into a string
//   // return the result
//   return arr.join('');
// }

//solution 1 cleaned up
// function reverse(str) {
//   return str
//     .split('')
//     .reverse('')
//     .join('');
// }

// solution 2 using the new FOR LOOP
// function reverse(str) {
//   // create empty string called 'reversed'
//   // for each character in the string -> take character
//   // and add it to tthe start of 'reversed'. Then return the variable
//   // 'reversed'
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// solution 3 using a fancy array helper
// function reverse(str) {
//   // turn str into an array with split() and using reduce helper
//   // function runs one time for every elemnt within the str.split() array
//   // fir st argument passedinto reduce is our reversed string
//   // second argument is the chracter we are working on in our array
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }
