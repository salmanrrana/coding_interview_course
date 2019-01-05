// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  // set up the base case
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  //calculate the midpoint (Math.floor helps round up/down the number)
  const midpoint = Math.floor((2 * n - 1) / 2);
  // create a temporary variable called add and assigend as let because this variable will change
  let add;
  // if the midpoint minus row is less than or equal to the length of the level string
  // and the midpoint plus row is greater or equal to the length of the level string
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    // add a "#" to the add variable
    add = "#";
  } else {
    // if the above does not happen add an empty space to he add variable
    add = " ";
  }

  pyramid(n, row, level + add);
}

// SOLUTION 1
// function pyramid(n) {
//   //find the midpoint of the rows
//   const midpoint = Math.floor((2 * n - 1) / 2);
//
//   // from 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     // create an empty string called 'level'
//     let level = "";
//     // from 0 to (columns)
//     for (let column = 0; column < 2 * n - 1; column++) {
//       // if the column should relate to midpoint like this
//       if (midpoint - row <= column && midpoint + row >= column) {
//         // add a '#' to 'level'
//         level += "#";
//       } else {
//         // add a space to 'level'
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;
