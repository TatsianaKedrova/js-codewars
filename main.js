function* generate() {
  console.log("first step");
  yield;
  console.log(" second step");
}

console.log(generate());

//iterators
let generateNumbers = {
  start: 1,
  end: 10,
};

generateNumbers[Symbol.iterator] = function () {
  let current = this.start;
  let last = this.end;

  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

for (let number of generateNumbers) {
  console.log(number);
}

//Symbols

let symbol = Symbol("tania");
console.log(symbol);
console.log(typeof symbol);

let symbol2 = Symbol("tania");
console.log(symbol);
console.log(symbol === symbol2);

let name = "tania";
let name2 = "tania";
console.log(name === name2);

let symb = Symbol.for("sherif");
let symb2 = Symbol.for("sherif");

console.log(symb === symb2);
