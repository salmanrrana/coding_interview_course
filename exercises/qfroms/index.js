// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  // iterate through all records in stack a and push into stack b
  // using the peek method to see and make sure it has records .
  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    // saves a reference to the last thing that got put into stack b
    const record = this.second.pop();

    //This will return the data from stack b to stack a
    while (this.second.peek()) {
      // takes one record at a time and pops it out and into stack a
      this.first.push(this.second.pop());
    }
    // now we are ready to return the record
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
