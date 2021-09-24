// const array = [1,2,3,4];
// for (var i = 0; i < array.length; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 3000)
// }

// for(let i = 0; i < array.length; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 400)
// }

function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log("Hello", getFullName())
}

console.log(sayHiBye("Tania","Kedrova"))

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    }
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = makeCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());