//This and context
function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Tania",
  age: 32,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function() {
    console.log(`Name is ${this.name}`)
  }
}