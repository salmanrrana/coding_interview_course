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
function steps(n) {
  // From 0 to n (iterate through rows)
  for (let row = 0; row < n; row++) {
    // create an empty string called "stair"
    let stair = "";
    // from 0 to n (iterate over the columns)
    for (let column = 0; column < n; column++) {
      // if the current column is = to or less than current row
      if (column <= row) {
        // add a "#" to the "stair" variable we created
        stair += "#";
        // or else
      } else {
        // add a space to the stair variable
        stair += " ";
      }
    }
    console.log(stair);
  }
}

module.exports = steps;
