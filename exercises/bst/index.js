// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // THis is inserting a node into a binary search tree
  insert(data) {
    // if the incoming data is less than the this.data
    // and there is a value on the left (the value is not null)
    //this is covering the lefthand side of the tree
    if (data < this.data && this.left) {
      // to recurse we call insert in this.left and pass in our data
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }

    //this is covering the righthand side of the tree
    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
