// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// SOLUTION 1
// function steps(n) {
//   // From 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     // create an empty string called "stair"
//     let stair = "";
//     // from 0 to n (iterate over the columns)
//     for (let column = 0; column < n; column++) {
//       // if the current column is = to or less than current row
//       if (column <= row) {
//         // add a "#" to the "stair" variable we created
//         stair += "#";
//         // or else
//       } else {
//         // add a space to the stair variable
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

// SOLUTION 2 - A recursive solution
// we are going to set the default for row to be 0
// also setting a default for stair
function steps(n, row = 0, stair = "") {
  // this sets the default case
  // if row is equal to n, then we have reached the end and return
  if (n === row) {
    return;
  }
  // if the 'stair' string has a length of n then we are at then end of row
  if (n === stair.length) {
    console.log(stair);
    // we will not pass stair as an argument because we want it to start with an default empty string
    return steps(n, row + 1);
  }

  // if length of stairstring is less or = to row # we are working on
  // we will add a '#', otherwise add a space/ ' '

  // if (stair.length <= row) {
  //   stair += "#";
  // } else {
  //   stair += " ";
  // }
  // steps(n, row, stair);

  // this ternary expession below is the same as the code above but we add stair at the end
  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}

module.exports = steps;
