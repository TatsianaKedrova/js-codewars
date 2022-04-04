const obj = {
  name: "Tania",
  age: 33,
  job: "Frontend Developer",
  hobby: "dancing",
};

for (let prop in obj) {
  console.log(prop);
}

console.log(obj.hasOwnProperty("job"));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7, 5, 7, 8, 5];

const arr2 = [];
for (let element of arr) {
  arr2.push(element);
}

console.log(arr2);
console.log(arr === arr2)
