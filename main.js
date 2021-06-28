let prom = new Promise((res, rej) => {
  let a = 20;
  console.log(a);
  // res(a);
  rej(new Error("Name: Tatiana"))
});
console.log(prom);

let prom2 = new Promise((res, rej) => {
  let a = 40;
  console.log(a);
  res({a : "Taniana"});
})
.then(result => {
  console.log("then: ", result)
}, err => {
  console.log("err: ", err);
  return "URL";
})
console.log(prom2);