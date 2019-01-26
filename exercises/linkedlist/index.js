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
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    // if there is no nodes in the linked list
    if (!this.head) {
      return;
    }
    // if there is not a second node and just one node
    if (!this.head.next) {
      this.head = null;
      return;
    }

    //initialize "previous" to be the firstnode
    let previous = this.head;
    //initialize "node" to be the item after the first node
    let node = this.head.next;

    // while there is a node after the node/it is defined
    while (node.next) {
      // "previous" will now become the next item ahead of the current state of "previous"
      previous = node;
      // "node" will now become the next node after the current state of "node"
      node = node.next;
    }
    // now that we are out of the while loop
    // because there is no node after the current state of node
    // we will set the current state of "previous" to be null
    previous.next = null;
  }
}

module.exports = { Node, LinkedList };
