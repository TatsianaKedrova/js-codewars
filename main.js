// // closure

// let a = 100;

// let say = () => {
//   a = 200;
// };

// say();
// console.log(a);

// let name = "John";
// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// console.log(foo);
// var foo = 5;

// var c = d * b;
// var d = 7;
// var b = 3;
// console.log(c);


display();

function display() {
    console.log("Hello Hoisting!");
}

// display2();

// const display2 = function() {
//     console.log("Hello display2");
// }

// displayArrow();

// const displayArrow = function() {
//     console.log("Hello displayArrow");
// }

catName("Raisa");

function catName(name) {
    console.log("My cat's name is " + name);
}

num = 8;
num + 7;
var num;

console.log(num);