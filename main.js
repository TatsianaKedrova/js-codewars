// closure

let a = 100;

let say = () => {
    a = 200;
    
}

say();
console.log(a);


let name = "John";
function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";

sayHi();