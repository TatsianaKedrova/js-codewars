// const test = {
//   prop: 42,
//   func() {
//     return this.prop;
//   },
// };

// console.log(test.func())

// let a = 'Hello World!';
// function first() {
//   console.log('Inside first function');
//   second();
//   console.log('Again inside first function');
// }
// function second() {
//   console.log('Inside second function');
// }
// first();
// console.log('Inside Global Execution Context');

let foo = {
  name: "Vlad",
  baz() {
  return this;
  }
}
console.log(foo.baz());    // 'this' указывает на объект 'foo', так как функция 'baz' была вызвана 
             // как метод объекта 'foo'
let bar = foo.baz;
console.log(bar());       // 'this' указывает на глобальный объект window, так как при вызове функции
             // ссылка на объект не используется

const test = {
  prop: 42,
  func: function() {
    return this;
  },
};
   
let ook = test.func;

console.log(test.func());
console.log(ook());

function f1() {
  return this;
}

console.log(f1());

f1() === window;

function f2(){
  "use strict"; // см. strict mode
  return this;
}
console.log(f2());

var ob = {b: 'Custom'};
var obj = {a: 'Custom'};
var a = 'Global';
function whatsThis() {
  return this.a; 
}

console.log(whatsThis());
console.log(whatsThis.call(obj));
console.log(whatsThis.call(ob));























//GROWTH OF POPULATION

// function nbYear(p0, percent, aug, p) {
// let year = 0;
// let result;
// for( let popul = p0; popul < p; popul = result) {
//   result = popul + popul*percent + aug;
//   year++;
// }
// return year;

// }
// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1500000, 0.25, 1000, 2000000));

// let a = 5;
// for( let i = 0; i < 10; i++) {
//   a =+ 5;
// }
// console.log(a);

// let text='';
// for (i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }

// console.log(text);