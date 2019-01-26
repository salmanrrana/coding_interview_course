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
}

module.exports = { Node, LinkedList };
