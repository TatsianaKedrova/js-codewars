// Equal Sides Of An Array

function findEvenIndex(arr) {

if(arr.length === 0 || arr.length > 1000) return;

let sumOfArr = arr.reduce((acc, current) => acc + current, 0);

arr.forEach(element => {
  console.log((sumOfArr - element) / 2);
})

return sumOfArr;

}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
// console.log(findEvenIndex([1,100,50,-51,1,1]));



// let sliceExample = arr.slice(0, 3);
// console.log(sliceExample);

function findSolution (arr) {
  let left = 0;
  let right = 0;
  const reducer = (acc, current) => acc + current;
}



let arr1 = [7,8,4,5,6,3,77,88];
for (let i = 0; i < arr1.length; i++) {
  console.log(i);
}