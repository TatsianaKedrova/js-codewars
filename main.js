//task 1
// function expression
// var boo = function tania() {
//   return 2;
// };
// console.log(typeof tania());

var invokedFunc = (function () {
  console.log("Code runs!");
})();

!(function () {
  console.log("Code runs twice!");
})();

//task 2
function* stas(num) {
  for (let i = 0; i < num; i++) {
    yield i;
  }
}

var func2 = stas(5);
console.log(func2.next());
console.log(func2.next());

// let time = {
//   hour: 2,
//   milli: this.hour,
//   seconds: () => 3600 * this.hour,
//   minutes() {
//     return 60 * this.hour;
//   },
// };

// console.log(time.minutes());
// console.log(time.seconds());
// console.log(time.milli);

// const module = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

// const unbound = module.getX();
// console.log(unbound);

//task 2
// console.log(notHoisted);
// var notHoisted = function() {
//   console.log('bar');
// };

// var first = 12345;

// var func1 = function () {
//   console.log(first);
// };
// func1();

//task promises
const obj = {
  name: "tania",
  age: "34",
  job: "Software Developer",
};

const bbb = [obj, { height: "58" }];
console.log("bbb:", bbb);
