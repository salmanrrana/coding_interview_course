// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    //pull off the next working element
    const node = arr.shift();

    // when we pull out hte value s, we add a new element to our counters
    //then we will add s back to the array
    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      // if we are dealing with a node
      //we will leave s where it currently is in the arr and
      // we want to push all of the children of node into the array
      arr.push(...node.children);
      // increment the last value in counters
      // find last element in counters [counters.length -1]
      // and increment it ++
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
