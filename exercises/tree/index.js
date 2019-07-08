// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    //iterate through list of records and then remove some data whithin a certain one
    this.children = this.children.filter(node => {
      // if we return true then we will return the item that matches the data
      // we are trying to "remove that data", so we will return everything else that
      // is not that data
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    // set up an arry with the root value of the tree
    const arr = [this.root];

    //while there are still elements in this array we are making
    //do the code within the while loop
    while (arr.length) {
      //shift will take out the first element of the array
      const node = arr.shift();
      // take all children(...node.children) from the node and
      //push them into the end of array
      arr.push(...node.children);
      // since we want to call this in a sort of loop to iterate over
      // we want to take the node and pass it into this function so we know
      // that we have gone through that node
      fn(node);
    }
  }

  traverseDF(fn) {
    let arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      //push them into the beginning of array
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
