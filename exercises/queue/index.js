// // --- Description
// // Create a queue data structure.  The queue
// // should be a class with methods 'add' and 'remove'.
// // Adding to the queue should store an element until
// // it is removed
// // --- Examples
// //     const q = new Queue();
// //     q.add(1);
// //     q.remove(); // returns 1;
//
// class Queue {
//   // step 1 - initialize an array and assign it to the instance in the queue
//   // the only place this can be done is in the constructor method
//   constructor() {
//     this.data = [];
//   }
//
//   // step 2 - Add our ADD method and call with peice of
//   // data that needs to be saved in our array
//   // unshift adds to the start of the array
//   add(record) {
//     this.data.unshift(record);
//   }
//
//   //step 3 - implement the remove method
//   // take value from end and return it
//   remove() {
//     return this.data.pop();
//   }
// }
//
// module.exports = Queue;

// **************SECOND ROUND**************

// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  // need to create something to hold our data
  // use the contructor since this is a class
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove(record) {
    // we add return so we can work with the record we just removed
    return this.data.pop();
  }
}

module.exports = Queue;
