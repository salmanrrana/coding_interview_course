// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
function anagrams(stringA, stringB) {
  // take our two inputs
  // clean it up
  // lowercase both strings
  // sort both strings
  return cleanString(stringA) === cleanString(stringB);
}

// create helper function
function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

// **************SECOND ROUND**************
// // // Solution 1
// // function anagrams(stringA, stringB) {
// //   // build a character map out of both strings
// //   const aCharMap = buildCharMap(stringA);
// //   const bCharMap = buildCharMap(stringB);
// //
// //   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
// //     return false;
// //   }
// //
// //   for (let char in aCharMap) {
// //     if (aCharMap[char] !== bCharMap[char]) {
// //       return false;
// //     }
// //   }
// //
// //   return true;
// // }
// //
// // // easy way to avoid two FOR loops is to create a helper function
// // function buildCharMap(str) {
// //   // create empty object that will serve as character map. we will iterate and
// //   // for every character inside we will add to character map
// //   const charMap = {};
// //
// //   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
// //     charMap[char] = charMap[char] + 1 || 1;
// //   }
// //
// //   return charMap;
// // }
// //
// // module.exports = anagrams;
//
// // --- Directions
// // Check to see if two provided strings are anagrams of eachother.
// // One string is an anagram of another if it uses the same characters
// // in the same quantity. Only consider characters, not spaces
// // or punctuation.  Consider capital letters to be the same as lower case
// // --- Examples
// //   anagrams('rail safety', 'fairy tales') --> True
// //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// //   anagrams('Hi there', 'Bye there') --> False
//
// // SOLUTION ME - not completed
// // function anagrams(stringA, stringB) {
// //   const charMapA = {};
// //   const charMapB = {};
// //
// //   let cleanA = stringA.replace(/[^\w]/, "").toLowercase();
// //   let cleanB = stringB.replace(/[^\w]/, "").toLowercase();
// //
// //   for(let char of cleanA){
// //     charMapA[char] = charMapA + 1 || 1;
// //   }
// //
// //   for(let char of cleanB){
// //     charMapB[char] = charMapB + 1 || 1;
// //   }
// //
// //   if(cleanA.length > cleanB.length){
// //
// //   }
// // }
//
// // SOLUTION 1
// // function anagrams(stringA, stringB) {
// //   const aCharMap = buildCharMap(stringA);
// //   const bCharMap = buildCharMap(stringB);
// //
// //   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
// //     return false;
// //   }
// //
// //   for (let char in aCharMap) {
// //     if (aCharMap[char] !== bCharMap[char]) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }
//
// //creating our helper function
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }
//
// // SOLUTION 2
// function anagrams(stringA, stringB) {
//   // this is a boolean and will return true or false
//   return cleanString(stringA) === cleanString(stringB);
// }
//
// function cleanString(str) {
//   return (
//     str
//       //remove extra characters and spaces
//       .replace(/[^\w]/g, "")
//       // lowercase all characters
//       .toLowerCase()
//       // split all characters in their own array of substrings
//       .split("")
//       //sort the characters in alphabetical order
//       .sort()
//       // return the individual subarrays as one "word"
//       .join("")
//   );
// }
//
// module.exports = anagrams;
