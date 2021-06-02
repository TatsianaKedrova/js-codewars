// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1
//   if(a === 2) {
//     resolve('Success')
//   } else {
//     reject('Failed')
//   }
// })

// p.then((message) => {
//   console.log('This is in the then ' + message)
// }).catch((message) => {
//   console.log('This is in the catch ' + message)
// })


// doSomething()
// .then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function (newResult) {
//   return doThirdThing(newResult);
// })
// .then(function (finalResult) {
//   console.log('Got the final result: ' + finalResult)
// })
// .catch(failureCallback);

// new Promise((resolve, reject) => {
//   console.log('Initial');

//   resolve();
// })
// .then(() => {
//   throw new Error('Something failed');

//   console.log('Do this');
// })
// .catch(() => {
//   console.error('Do that');
// })
// .then(() => {
//   console.log('Do this, no matter what happened before');
// });

const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallBack(callback, errorCallback) {
//   if(userLeft) {
//     errorCallback({
//       name: 'User Left',
//       message: ':('
//     })
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User watchng cat meme',
//       message:'WebDevSimplified < cat'
//     })
//   } else {
//     callback('Thumbs up and subscribe')
//   }
// }

// watchTutorialCallBack((message) => {
//   console.log('Success: ' + message)
// }, (error) => {
//   console.log("Hey " + error.name + ' ' + error.message)
// })

function watchTutorialPromise() {
return new Promise((resolve, reject) => {
  if(userLeft) {
    reject({
      name: 'User Left',
      message: ':('
    })
  } else if (userWatchingCatMeme) {
    reject({
      name: 'User watchng cat meme',
      message:'WebDevSimplified < cat'
    })
  } else {
    resolve('Thumbs up and subscribe')
  }
})
}

watchTutorialPromise().then((message) => {
  console.log('Success: ' + message)
}).catch((error) => {
  console.log("Hey " + error.name + ' ' + error.message)
});