const person = new Object({
  name: "Tania",
  age: 32,
  dance: function () {
      console.log("She can dance very well");
  }
})

console.log(person);

const person1 = {
  name: "Stas",
  age: 32,
  guitar: function () {
      console.log("He can play guitar very well");
  }
}
console.log(person1);

Object.prototype.sayHi = function () {
  console.log("Hello!");
}

const lena = Object.create(person);
lena.name = "Elena";

const str = "I am string";
const stri = new String("I am phrase");

