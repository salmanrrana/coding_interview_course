// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  // set variable for slow and fast as the first item - same as using this.head
  let slow = list.getFirst();
  let fast = list.getFirst();

  // if these variables (fast.next and fast.next.next) exist
  //go into the while loop and do thiat
  while (fast.next && fast.next.next) {
    //advance our slow and fast variable
    // slow will advance one and fast will advance two
    slow = slow.next;
    fast = fast.next.next;

    //if the slow and fast ever land onthe same data/node
    if (slow === fast) {
      // return that it is true - it is a circular list
      return true;
    }
  }

  // if the while loop is not fulfilled,
  // there is not a circular list and we return false
  return false;
}

module.exports = circular;
