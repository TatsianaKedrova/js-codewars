console.log(({}).prototype === ({}).__proto__);

function ITKamasutra() {}
console.log(ITKamasutra.prototype === ITKamasutra.__proto__);

function ITIncubator() {}

console.log(ITIncubator.__proto__ === ITKamasutra.__proto__);
console.log(ITIncubator.prototype === ITKamasutra.prototype);

let age = 18;
console.log(age.prototype === Number.prototype);
console.log(age.__proto__ === Number.prototype);

let Component = (props) => {
  return `<div>I don't know Prototype</div>`
}

console.log(Component.prototype === Object.prototype);

class Hacker {}
console.log(Hacker.__proto__ === Function.prototype);

function ITIncubat() {}
console.log(ITIncubat.__proto__);

const count = 12;
console.log(count.__proto__);



console.dir(() => {

})

class Test {
  constructor (name) {
    this.name = name
  }
}

let obj = new Test('evgen');
obj.__proto__.sayHi = function() {}

console.dir(Test);
console.dir(obj);

// function Human(name, age) {
//   this.name = name;
//   this.age = age
// }

// Human.prototype.eat = function() {}

// Human.prototype = {
//   constructor: Human,
//   eat() {
//     console.log('Tratata');
//   },
//   sleep() {},
// }

// console.log(new Human('tets',30))

// function SuperHuman(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Object.assign(SuperHuman.prototype, Human.prototype, {constructor: SuperHuman, fly: function(){
//   console.log("I am flying")
// }})

// console.log(new superHuman('Yo', 30))

let obj2 = new SuperHuman('Tania', 33);


SuperHuman.prototype = {...Human.prototype, ...SuperHuman.prototype, ...{superFly: function f() {
  console.log("work")
}}}


class Testt {
  constructor(name) {
    this.name = name
  }
}

Test.prototype = {
  yoyo: 'yo'
}

class Test2 extends Test {
  constructor(name) {
    super(name);
  }
}


function logItems(arr) {
arr.forEach(console.log)
}

logItems([1,2,4]);

Array.prototype.logItems = function() {
  this.forEach(console.log)
}

let testArr = [1,2,3,4];

testArr.logItems();


class Animal {
  constructor(name = "Animal") {
    this.name = name
  }
  sayHi() {
    console.log("Hi")
  }
}

class Monkey extends Animal {
  constructor(name) {
    super (name);
  }
}

class Human extends Monkey {
  constructor(name) {
    super(name);
  }
}
let human1 = new Human('evgen');
console.log(human1);


Function.prototype._bind = function (context, ...args) {
  // const _this = this;
  // return function (...rgs2) {
  //     return _this.apply(context, [...args, ...rgs2])
  // }
  return (...rgs2)=> this.apply(context, [...args, ...rgs2]);
}

let resultFunc2 = obj.sayName._bind(obj3, 75);


Function.prototype._bind2 = function (context, ...args) {
  context.___bindFunc___ = this;
  return function (...rgs2) {
    return context.___bindFunc___ (...args, ...rgs2)
  }
}

let resultFunc3 = obj.sayName._bind2(obj3, 75);
resultFunc2(150);