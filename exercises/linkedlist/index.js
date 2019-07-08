// // --- Directions
// // Implement classes Node and Linked Lists
// // See 'directions' document
//
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
//
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//
//   insertFirst(data) {
//     this.insertAt(data, 0);
//   }
//
//   // this can be redundant so we can write the inserFirst like the above code
//   // insertFirst(data) {
//   //   this.head = new Node(data, this.head);
//   //   //This is one option to solve this part of the problem or we can do the above
//   //   // const node = new Node(data, this.head);
//   //   // this.head = node;
//   // }
//
//   size() {
//     let counter = 0;
//     let node = this.head;
//
//     while (node) {
//       counter++;
//       node = node.next;
//     }
//
//     return counter;
//   }
//
//   getFirst() {
//     return this.getAt(0);
//   }
//
//   // this also can be redundant and can be written as above
//   // getFirst() {
//   //   return this.head;
//   // }
//
//   getLast() {
//     return this.getAt(this.size() - 1);
//   }
//
//   // This is also redundant and can be shorten to the above
//   // getLast() {
//   //   if (!this.head) {
//   //     return null;
//   //   }
//   //
//   //   let node = this.head;
//   //   while (node) {
//   //     if (!node.next) {
//   //       return node;
//   //     }
//   //     node = node.next;
//   //   }
//   // }
//
//   clear() {
//     this.head = null;
//   }
//
//   removeFirst() {
//     if (!this.head) {
//       return;
//     }
//
//     this.head = this.head.next;
//   }
//
//   removeLast() {
//     if (!this.head) {
//       return;
//     }
//     if (!this.head.next) {
//       this.head = null;
//       return;
//     }
//
//     let previous = this.head;
//     let node = this.head.next;
//
//     while (node.next) {
//       previous = node;
//       node = node.next;
//     }
//     previous.next = null;
//   }
//
//   insertLast(data) {
//     const last = this.getLast();
//
//     if (last) {
//       last.next = new Node(data);
//     } else {
//       this.head = new Node(data);
//     }
//   }
//
//   getAt(index) {
//     let counter = 0;
//     let node = this.head;
//     while (node) {
//       if (counter === index) {
//         return node;
//       }
//       counter++;
//       node = node.next;
//     }
//     return null;
//   }
//
//   removeAt(index) {
//     if (!this.head) {
//       return;
//     }
//
//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }
//     const previous = this.getAt(index - 1);
//     if (!previous || !previous.next) {
//       return;
//     }
//     previous.next = previous.next.next;
//   }
//
//   insertAt(data, index) {
//     if (!this.head) {
//       this.head = new Node(data);
//       return;
//     }
//
//     if (index === 0) {
//       this.head = new Node(data, this.head);
//       return;
//     }
//
//     const previous = this.getAt(index - 1) || this.getLast();
//     const node = new Node(data, previous.next);
//     previous.next = node;
//   }
// }
//
// module.exports = { Node, LinkedList };

// **************SECOND ROUND**************

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  // next is the second argument
  // if we pass in a second argument, this will pass it as the next item in the
  // node linked list. so if we pass in this.head, it will pass that as the next item in the list
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
    //FIRST SOLUTION
    // const node = new Node(data, this.head);
    // this.head = node;

    //REUSE CODE VERSION
    this.insertAt(data, 0);
  }

  size() {
    // set up counter variable
    let counter = 0;
    // get reference to the head of the list
    let node = this.head;

    // while there is a node
    while (node) {
      // add 1 to the counter
      counter++;
      // now have the node equal the next one in the linked list
      //if the node is "null", this while loop will stop
      // this will not change the head, it will only change the reference to node to the next one in the list
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    //FIRST SOLTION
    // this will return the first node in the linked list
    // return this.head;

    //REUSE CODE SOLUTION
    return this.getAt(0);
  }

  getLast() {
    // //this is covering the case that there is no nodes
    // if (!this.head) {
    //   return null;
    // }
    //
    // let node = this.head;
    // while (node) {
    //   //if the next node does not have a next property (it is null)
    //   if (!node.next) {
    //     // return that node to us
    //     return node;
    //   }
    //   // or else go ahead and asign the next value as node
    //   node = node.next;
    // }

    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if this linked list is empty, return it
    if (!this.head) {
      return;
    }
    // look at the second node to now be the head
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.clear();
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    // as long as node.next exists
    // using the while loop to iterate through the list until
    // there is no nextnode.
    //when it reaches the end we will get out of the for loop and
    // set the previous.net to null
    while (node.next) {
      // update value of previous to be node
      previous = node;
      //update next to be the next node.next value
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    //This will get the last variable in the list
    const last = this.getLast();

    if (last) {
      // this means there are some existing nodes in our chain
      //we will create a new Node with the data and add it as the next one from the last
      last.next = new Node(data);
    } else {
      // the chain is empty
      // we will create a new node in the head
      this.head = new Node(data);
    }
  }

  getAt(n) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === n) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    // is the list empty
    if (!this.head) {
      return;
    }

    //if we are trying to remove the head element
    if (index === 0) {
      // assign the head as the next node
      this.head = this.head.next;
      // we need to return the new list after we have completed this action
      return;
    }

    //this will use the getAt function and look at the previous record
    const previous = this.getAt(index - 1);
    //if we are attempting to ask for a record that does not exist/the index is too high for the list
    if (!previous || !previous.next) {
      return;
    }
    //now assign previous.next as the record after the record we are attempting to "remove"
    //however in this case, it is simply skipping it and remains in memory.
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    // if there is an empty list
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    // if there is only one record in the list
    if (index === 0) {
      // make the new Node the head of the list
      // the second argument in the Node() is to say that the current item in the list is now the next
      this.head = new Node(data, this.head);
      return;
    }

    //setting up a reference to the previous node
    // if the first section returns a falsey value we will do the "or" case
    const previous = this.getAt(index - 1) || this.getLast();
    //creating a new node, when creating, pass in the current next of previous
    //placeing the new node
    const node = new Node(data, previous.next);
    // now the previous is looking at node as the "next"
    previous.next = node;

    // when the index is out of bounds and we want to place
    // the new variable at the end of the list
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
