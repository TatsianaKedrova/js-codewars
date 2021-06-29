// this, bind, call, apply

function hello() {
  console.log("Hello", this);
}

console.log(hello());

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
person.sayHello();
// console.log(person.sayHello());

const tania = {
  name: "Tatiana",
  age: 33
}


const fnLenaInfoLog = person.logInfo.bind(tania,"Frontend", '201275567779');
console.log(fnLenaInfoLog());
person.logInfo.bind(tania);