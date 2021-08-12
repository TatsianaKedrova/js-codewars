//Number.prototype.toString()

// let a = new Number(2);
// console.log(typeof a);

// let b = 2;
// console.log(typeof b);

// let num = Number("123");
// console.log(num);
// console.log(typeof num);

//closure
// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?

// function makeWorker() {
//     let name = "Pete";

//     return function() {
//         alert(name);
//     };
// }

// let name = "John";

// let work = makeWorker();
// work();


// function sayHiBye(firstName, lastName) {

//     // функция-помощник, которую мы используем ниже
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );
  
//   }

//   console.log(sayHiBye("Tania", "Kedrova"));

// function User(name) {
//     this.sayHi = function() {
//         alert(name);
//     };
// }

// let user = new User("John");
// user.sayHi();


function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    }
}

let firstCount = makeCounter();
let secondCount = makeCounter();
let thirdCount = makeCounter();
let fourthCount = makeCounter();

console.log(firstCount);
console.log(secondCount);
console.log(thirdCount);
console.log(fourthCount);

console.log(firstCount());
console.log(firstCount());
console.log(secondCount());
console.log(thirdCount());
console.log(fourthCount());


if (true) {
    const message = 'Hello'
}
console.log(message) // ReferenceError: message is not defined







