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

function pyramid(n) {
  //find the midpoint of the rows
  const midpoint = Math.floor((2 * n - 1) / 2);

  // from 0 to n (iterate through rows)
  for (let row = 0; row < n; row++) {
    // create an empty string called 'level'
    let level = "";
    // from 0 to (columns)
    for (let column = 0; column < 2 * n - 1; column++) {
      // if the column should relate to midpoint like this
      if (midpoint - row <= column && midpoint + row >= column) {
        // add a '#' to 'level'
        level += "#";
      } else {
        // add a space to 'level'
        level += " ";
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;
