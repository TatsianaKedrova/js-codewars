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

console.log(linearSearch(array, 3));

function linearSearch2(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
      if (array[i] === item) {
        return i;
      }
     
    }
    return null;
  }

console.log(linearSearch2(array, 9));
console.log("count: ", count);
  