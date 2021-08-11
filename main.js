//sorting

const months = ['March', undefined, 'Jan', undefined, 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [undefined, 1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

const arr = [56,7,42,31,28,96,4,15,27]

arr.sort();
console.log(arr);

arr.sort((a, b) => a - b);
console.log(arr);

let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

items.sort((a, b) => {
  
  let aValue = a.name.toUpperCase();
  let bValue = b.name.toUpperCase();

  if(aValue < bValue) {
    return -1;
  } else if(aValue > bValue) {
    return 1; 
  } else {
    return 0;
  }
});
console.log(items);

let numberArray = [40, 1, 5, 200];
numberArray.sort();
console.log(numberArray);

numberArray.sort((a, b) => a - b);
console.log(numberArray);

let numericStringArray = ['80', '9', '700'];
numericStringArray.sort();
console.log(numericStringArray);

numericStringArray.sort((a, b) => a - b);
console.log(numericStringArray);

numericStringArray.sort((a, b) => {

  if(a < b) {
    return -1;
  } else if(a > b) {
    return 1; 
  } else {
    return 0;
  }
});
console.log(numericStringArray);

//parseInt method to convert string into number

let str = "3000";
console.log(parseInt(str));











