// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  //if there is something on the left of the node AND
  //we call validate with a minimum of null and a maximum of node.data
  //when we go down the left side we are setting our max
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  // when we go down the might we are setting a min
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
