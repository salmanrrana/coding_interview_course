// // --- Directions
// // Write a function that accepts an integer N
// // and returns a NxN spiral matrix.
// // --- Examples
// //   matrix(2)
// //     [[1, 2],
// //     [4, 3]]
// //   matrix(3)
// //     [[1, 2, 3],
// //     [8, 9, 4],
// //     [7, 6, 5]]
// //  matrix(4)
// //     [[1,   2,  3, 4],
// //     [12, 13, 14, 5],
// //     [11, 16, 15, 6],
// //     [10,  9,  8, 7]]
//
// function matrix(n) {
//   const results = [];
//   // # of subarrays that are going to be pushed us dependent on "n"
//   // loop through 0 to n and for each step push data into the results variable
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }
//   // create counter variable
//   let counter = 1;
//   // declare the row and column variables as let since it will be changing throughout the function
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   while (startColumn <= endColumn && startRow <= endRow) {
//     // top row
//     for (let i = startColumn; i <= endColumn; i++) {
//       // asign some value to the results array
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;
//
//     // Right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;
//     // bottom row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;
//
//     // start column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }
//
//   return results;
// }
//
// module.exports = matrix;

// **************SECOND ROUND**************

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create a empty array
  const results = [];

  // Number of subarray is dependent on the value of n
  // iterate in a 'for loop' from 0 to n and push in empty subarray into results
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  // create a counter variable starting at 1
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  //make sure to execute this statement if these things are true with while loop
  while (startColumn <= endColumn && startRow <= endRow) {
    // first "for loop" to assemble the top row of our solution
    // we want to iterate from the first column to the last column
    for (let i = startColumn; i <= endColumn; i++) {
      // when we iterate, take the position we are currently in and push that result
      results[startRow][i] = counter;
      //after we have added the current value of i into the results subarray in the larger array
      //add 1 to the counter
      counter++;
    }
    //  after this above "for loop" has been completed
    // add 1 to startRow
    startRow++;

    // next "for loop" to assemble the row on the right hand side
    // iterate from results at row 1 at the next column
    for (let i = startRow; i <= endRow; i++) {
      // place the current value of the counter in that posiiton(i) at the endColumn on the right side
      results[i][endColumn] = counter;
      //then increment the counter 1
      counter++;
    }
    // now move endColumn down 1
    endColumn--;

    // next "for loop" ito assemble the line on the bottom
    // now we are going backwards and need to subtract
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // next "for loop" to assemble the line on the left
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
