// // --- Directions
// // 1) Complete the task in weave/queue.js
// // 2) Implement the 'weave' function.  Weave
// // receives two queues as arguments and combines the
// // contents of each into a new, third queue.
// // The third queue should contain the *alterating* content
// // of the two queues.  The function should handle
// // queues of different lengths without inserting
// // 'undefined' into the new one.
// // *Do not* access the array inside of any queue, only
// // use the 'add', 'remove', and 'peek' functions.
// // --- Example
// //    const queueOne = new Queue();
// //    queueOne.add(1);
// //    queueOne.add(2);
// //    const queueTwo = new Queue();
// //    queueTwo.add('Hi');
// //    queueTwo.add('There');
// //    const q = weave(queueOne, queueTwo);
// //    q.remove() // 1
// //    q.remove() // 'Hi'
// //    q.remove() // 2
// //    q.remove() // 'There'
//
// const Queue = require("./queue");
//
// function weave(sourceOne, sourceTwo) {
//   const q = new Queue();
//
//   // Iterate over the different elements with peek function
//   // This way if no elements are left we do not get undefined
//   // if both are "TRUE" do this function.
//   while (sourceOne.peek() || sourceTwo.peek()) {
//     // check peek function again and make sure there are still elemnts inside of it
//     if (sourceOne.peek()) {
//       q.add(sourceOne.remove());
//     }
//
//     if (sourceTwo.peek()) {
//       q.add(sourceTwo.remove());
//     }
//   }
//   return q;
// }
//
// module.exports = weave;

// **************SECOND ROUND**************

// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  // create a new Queue that can conbine the result of sourceOne and SOURCETWO
  const q = new Queue();

  // iterate through all of the elements in sourceone and sourcetwo withough
  // accessing the arrays inside them
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

module.exports = weave;
