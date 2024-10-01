// const promise = new Promise((resolveOuter) => {
//   resolveOuter(
//     new Promise((resolveInner) => {
//       setTimeout(resolveInner, 1000);
//     })
//   );
// });
// console.log("promise: ", promise);

const allThenables = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};
const promise = Promise.resolve(allThenables);
console.log("promise: ", promise);

