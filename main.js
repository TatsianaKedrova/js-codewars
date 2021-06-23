// Equal Sides Of An Array

function findEvenIndex(arr) {

if(arr.length <= 0 || arr.length > 1000) return;
console.log(arr.length);
let iterator = arr.entries();
for(let e of iterator) {
  console.log(e);
} 

let sumOfArr = arr.reduce((acc, current) => acc + current, 0);
return sumOfArr;

}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
// console.log(findEvenIndex([1,100,50,-51,1,1]));

