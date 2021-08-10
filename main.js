//spread operator

function sum(x, y, z) {
    return x + y + z;
  }

  const numbers = [1, 2, 3];

  console.log(sum(...numbers));
  console.log(sum.apply(null, numbers));

  let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];

console.log(numberStore);
console.log(numberStore);
console.log(numberStore);
console.log(numberStore);


