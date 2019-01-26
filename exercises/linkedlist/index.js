// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    //This is one option to solve this part of the problem or we can do the above
    // const node = new Node(data, this.head);
    // this.head = node;
  }

  size() {
    //create a counter set to 0
    let counter = 0;
    // get reference to the head of the linked list
    let node = this.head;

    // while there is a node/when node is a truthy value
    while (node) {
      // add 1 to the counter
      counter++;
      // go to the next node and see if next is null or has a value
      node = node.next;
    }

    return counter;
  }
}

module.exports = { Node, LinkedList };
