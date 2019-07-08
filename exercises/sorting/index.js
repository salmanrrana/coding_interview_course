// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  //implement bubblesort

  //for loop to iterate from forst to last of arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // if the element at the current index - "arr[j]"- is greater
      // that the next one
      if (arr[j] > arr[j + 1]) {
        // use temp variable lesser tow swap the values
        //if we are in this if statement, the lesservalue is the arr[j+1]
        const lesser = arr[j + 1];
        // the new value of arr[j+1] is now arr[j]
        arr[j + 1] = arr[j];
        // new value of arr[j] is now the new lesser variable we create
        arr[j] = lesser;
      }
    }
  }
  // return sorted array
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  // does the array only have 1 element inside of it
  if (arr.length === 1) {
    return arr;
  }

  // split arr into two equal halves
  // and determine centerpoint
  // MATH.FLOOR will round down
  const center = Math.floor(arr.length / 2);
  // divide the arr into two halves
  //slice() will take everything from 0 to but not including center
  const left = arr.slice(0, center);
  // take everything from the center to the end
  const right = arr.slice(center);

  // recursively call mergeSort now
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  //while there is still a length more than 0
  while (left.length && right.length) {
    // if the first left value on left hand side is less than right hand side
    if (left[0] < right[0]) {
      //take first value out of left(left.shift()) and push it in the results arrayresults.push()
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  //if one of the left or right has a value remaining, put that in the results array
  // create new empty array with first [
  // take all values inside of results(...results) and add to the new array
  //take all values inside of left(...left) and add to the new array
  // take all values inside of right(...right) and add to the new array
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
s;
