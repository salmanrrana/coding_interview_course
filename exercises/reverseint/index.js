// // --- Directions
// // Given an integer, return an integer that is the reverse
// // ordering of numbers.
// // --- Examples
// //   reverseInt(15) === 51
// //   reverseInt(981) === 189
// //   reverseInt(500) === 5
// //   reverseInt(-15) === -51
// //   reverseInt(-90) === -9
//
// // Solution 1 - cleaned up
// // using Math.sign() will return a positive
// // or negative 1 depending on the number that is passed in it
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//
//   return parseInt(reversed) * Math.sign(n);
// }
//
// module.exports = reverseInt;
//
// // Solution 1
// // function reverseInt(n) {
// //   const reversed = n
// //     .toString()
// //     .split('')
// //     .reverse()
// //     .join('');
// //
// //   if (n < 0) {
// //     return parseInt(reversed) * -1;
// //   }
// //   return parseInt(reversed);
// // }

// **************SECOND ROUND**************

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// SOLUTION 1
// function reverseInt(n) {
//   var string = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");
//
//   if (n < 0) {
//     return parseInt(string) * -1;
//   }
//   return parseInt(string);
// }

// SOLUTION 1 - cleaned up
// function reverseInt(n) {
//   var string = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");
//
//   return parseInt(string) * Math.sign(n);
// }

// SOLUTION ME
function reverseInt(n) {
  var string = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(string) * Math.sign(n);
}
module.exports = reverseInt;
