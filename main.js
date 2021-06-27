// let pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 4000);
//   // reject();
// });
// console.log(pr);

// let axios = {

//   get() {
//     let pr = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("operation is completed!")}, 3000 );
//     });
//     return pr;
//   }
// };

// console.log(axios.get());


console.log("start");
console.log("start 2");

function timeOut2sec() {
  console.log('timeOut2sec');
}

window.setTimeout( function() {
  console.log("Inside timeout");
}, 5000 )

setTimeout(timeOut2sec, 2000);

console.log("End");

