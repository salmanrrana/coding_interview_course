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
    //this looks at first node in chain
    let node = this.head;
    // as long as node is defined
    while (node) {
      // check to see if counter is = to index that we are trying to retreive
      if (counter === index) {
        return node;
      }
      // if they dont equal each other we will do this loop
      // first we will add 1 to the counter
      counter++;
      //then we will advance to the next loop
      node = node.next;
    }
    // if we return a number larger than the linked list
    return null;
  }

  removeAt(index) {
    //first check to see if the list is empty
    if (!this.head) {
      return;
    }

    // trying to remove the head element (the very first element at index of 0)
    if (index === 0) {
      // point at the second element in the chain. this removes the first element
      // if only one value in list, then the next element is null, thus removing first element
      this.head = this.head.next;
      // if we are done, then return
      return;
    }
    // reuse the getAt method to find "previous" node right
    // before the one we are attempting to remove
    const previous = this.getAt(index - 1);
    // if the previous does not exist(the index is larger than the list)
    // or of the previous.next does not exist(at end of list)
    if (!previous || !previous.next) {
      // then just return
      return;
    }
    // point to the next item on the list for previous
    // rather than the one it is currently looking at
    previous.next = previous.next.next;
  }
}

module.exports = { Node, LinkedList };
