// this, bind, call, apply

function hello() {
  console.log("Hello", this);
}

// console.log(hello());

const person = {
  name: "Tania",
  age: 32,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)

    console.groupEnd()

  }
}
// person.sayHello();
// console.log(person.sayHello());

const tania = {
  name: "Tatiana",
  age: 33
}


// const fnLenaInfoLog = person.logInfo.bind(tania,"Frontend", '201275567779');
// console.log(fnLenaInfoLog());
// person.logInfo.bind(tania);

console.log(person.logInfo.call(tania,"Frontend", '201275567779'));
person.logInfo.call(tania,"Frontend", '201275567779')
// console.log(secondLogInfo());

person.logInfo.apply(tania, ["Frontend", '201275567779']);


const array = [1,2,3,4,5];

// function multBy(arr, n) {
//   return arr.map(function(i) {
//     return i * n
//   })
// }

Array.prototype.multBy = function(n) {
  return this.map(item => item * n);
}
console.log(array.multBy(2));

// console.log(multBy(array, 15));