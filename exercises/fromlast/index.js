// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  // start slow and fast at the beginning of the list
  let slow = list.getFirst();
  let fast = list.getFirst();

  // while the index is greater than 0
  // this lets us advance the pointer in the linked list for as much as we need to
  // in order to attempt to get to the pointer of "fast" to the end of the list
  // yet it will stop once we reach zero
  while (n > 0) {
    // advance fast
    fast = fast.next;
    // subtract one from n
    n--;
  }

  //once we reach 0 above, we can now advance slow one and fast one
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
