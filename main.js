let user = {
  name: "Tania",
  age: 32,

  sayHi() {
    console.log(`Hello, ${this.name}`)
  }
}

let admin = user;

// user = null;

admin.sayHi();
user.sayHi();

user.name = "Stas";
admin.sayHi();
user.sayHi();

admin.name = "Vova";
admin.sayHi();
user.sayHi();


// user = {
//   age: 100,
//   nationality: Italy
// }


// console.log(user.nationality)



let user1 = {
  name: "John"
}

let admin1 = {
  name: "Admin"
}

function sayBye() {
   console.log(this.name)
}

user1.f = sayBye;
admin1.f = sayBye;

// user1.f();
// admin1.f();

user1['f']();
admin1['f']();

let user2 = {
  
}
