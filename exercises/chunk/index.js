// // --- Directions
// // Given an array and chunk size, divide the array into many subarrays
// // where each subarray is of length size
// // --- Examples
// // chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// // chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// // chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// // chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// // chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//
// // Solution 2
// function chunk(array, size) {
//   // create empty 'chuncked' array
//   const chunked = [];
//   // create 'index' start at 0
//   let index = 0;
//   // while index is less than array.length
//   while (index < array.length) {
//     // push a slice of length 'size' from 'array' into 'chuncked'
//     chunked.push(array.slice(index, index + size));
//     // add 'size' to index
//     index += size;
//   }
//   return chunked;
// }
//
// module.exports = chunk;
//
// // // Solution 1:
// // function chunk(array, size) {
// //   // Create empty array to hold chuncks called 'chuncked
// //   const chuncked = [];
// //
// //   // for each element in the "unchuncked" array
// //   for (let element of array) {
// //     // create a variable called last that retreive the last element in "chuncked"
// //     const last = chuncked[chuncked.length - 1];
// //
// //     // if last element does not exist, or if its length is
// //     // equal to chunck size ->
// //     if (!last || last.length === size) {
// //       // push a new chunck into 'chuncked' with the current element
// //       chuncked.push([element]);
// //       // else add the current element into the chunk
// //     } else {
// //       last.push(element);
// //     }
// //   }
// //   // return chuncked
// //   return chuncked;
// // }

// **************SECOND ROUND**************

// // SOLUTION 1
// function chunk(array, size) {
//   // create an empty array
//   const chunked = [];
//
//   // loop through the current unchecked array
//   for (let element of array) {
//     // create a variable for the last element
//     // created in the chunked array
//     const last = chunked[chunked.length - 1];
//
//     // check to see if the last element does not exist OR
//     // if the length is = to chunck size
//     if (!last || last.length === size) {
//       // add a new element to chunked
//       // and put our element inside of that
//       // the [] in the push() is creating a new array in the chuncked array
//       chunked.push([element]);
//     } else {
//       // if does not meet first requirements, we push element
//       // in the array we created within chuncked
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// SOLUTION 1
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
