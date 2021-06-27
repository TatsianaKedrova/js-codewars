//Promise

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 2000);
});

let pr = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Something went wrong!")), 7000);
});

let prom = new Promise((res, rej) => {
  setTimeout(() => res("done"), 1000);
});
prom.then(
  (result) => alert(result),
  (error) => alert(error)
);

let promise2 = new Promise((res, rej) => {
  setTimeout(() => rej(new Error("Something went wrong!!!")));
}).then(
  (result) => alert(result),
  (error) => alert(error)
);

let promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("hey darling"), 1000);
})
    .then(alert);

let promise4 = new Promise((res, rej) => {
  setTimeout(() => rej(new Error("Mistake!!!")), 2000)
})
  .catch(alert);


