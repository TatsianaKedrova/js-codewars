const array = [1, 7, 4, 6, 9, 3, 2, 45, 78, 3, 6, 1];
let count = 0;

function linearSearch(array, item) {
  let searchParam;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      searchParam = array[i];
    }
    console.log("searchParam: ", searchParam);
  }
  return searchParam;
}

// console.log(linearSearch(array, 3));

function linearSearch2(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

// console.log(linearSearch2(array, 9));
// console.log("count: ", count);

function binarySearch(array, item) {
  let start = 0;
  let end = array.length - 1;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(array, 78));
console.log("count: ", count);

