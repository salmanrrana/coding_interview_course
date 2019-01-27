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
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    // if the list is empty
    if (!this.head) {
      // set the head to be a new node with the "data" that was passed in
      this.head = new Node(data);
      // and return
      return;
    }

    // if we try to insert at index 0, there is nothing there
    // handle the case when element is at index 0
    if (index === 0) {
      // this creates a new node and sets it as the head
      // while also taking the first item in the list(0)
      // and setting it as the next item in the list
      this.head = new Node(data, this.head);
      return;
    }

    // when we want to inset somewhere in the middle of a List
    // reuse the getAt method to find the data previous to the place
    // we want to add the new data
    const previous = this.getAt(index - 1) || this.getLast();
    //this creates the new node and makes it point at the same data that previous is currently
    //also pointing to in terms of "next"
    const node = new Node(data, previous.next);
    // Now we are setting the const previous data to have a next of the new node we just created.
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };
