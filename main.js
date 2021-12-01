// function getName () {
//   return this.name
// }

// getName();
// console.log("hello");

// let sally = {
//   name: "Sally"
// }

// let tania = {
//   name: "Tania"
// }

// console.log(tania);
// console.log(tania.age);

// console.log(getName.bind(sally)());
// console.log(getName.bind(tania)());

// let getSurname = () => {
//   return this.name
// }

// console.log(getSurname.bind(tania)());

const divHeight = document.querySelector(".divHeight");

const a = divHeight.getAttribute('style');
const b = divHeight.scrollHeight;
const c = divHeight.clientHeight;
console.log("soething: ", a);
console.log("scrollheight: ", b);
console.log("clientHeight: ", c);

const d = divHeight.getBoundingClientRect();
console.log(d);

try {
  await fetch('http://example.com');
}
catch (err){
  console.log("err: ", err);
}


