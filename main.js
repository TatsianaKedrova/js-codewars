// function createCalcFunction (n) {
//   return function() {
//       console.log(1000 * n)
//   }
// }

// const calc = createCalcFunction(42);
// calc();



// function createIncrementor (n) {
//   return function(num) {
//     return n + num;

//   }
// }

// const addOne = createIncrementor(1);
// console.log(addOne(10));
// const addTen = createIncrementor(10);
// console.log(addTen(10));
// console.log(addTen(41));


// function urlGenerator(domain) {
//   return function (url) {
//     return `http://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com');
// console.log(comUrl("google"));
// console.log(comUrl("twitter"));
// console.log(comUrl("facebook"));

// const ruUrl = urlGenerator('ru');
// console.log(ruUrl('vkontakte'));
// console.log(ruUrl('odnoklassniki'));
// console.log(ruUrl('yandex'));

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args)
    
//   }
// }
// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: "Stas", age: 32, job: "developer" };
// const person2 = { name: "Tania", age: 32, job: "inProgress" };

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// function makeFunction () {
//   var name = "mozilla";
//   function displayName() {
//     alert (name);
//   }
//   return displayName;
// } ;

// var muFunc = makeFunction();
// muFunc();

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// };

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));

// let a = 15;

// function hey() {
//   let a = 10;
// }

// hey();
// console.log(a);

// var Counter = (function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {

















