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

// function watchTutorialPromise() {
// return new Promise((resolve, reject) => {
//   if(userLeft) {
//     reject({
//       name: 'User Left',
//       message: ':('
//     })
//   } else if (userWatchingCatMeme) {
//     reject({
//       name: 'User watchng cat meme',
//       message:'WebDevSimplified < cat'
//     })
//   } else {
//     resolve('Thumbs up and subscribe')
//   }
// })
// }

// watchTutorialPromise().then((message) => {
//   console.log('Success: ' + message)
// }).catch((error) => {
//   console.log("Hey " + error.name + ' ' + error.message)
// });
//new function
const recordViodeoOne = new Promise((resolve, reject) => {
  resolve("Video 1 recorded");
});

const recordViodeoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 recorded");
});

const recordViodeoThree = new Promise((resolve, reject) => {
  resolve("Video 3 recorded");
});

Promise.race([recordViodeoOne, recordViodeoTwo, recordViodeoThree]).then(
  (message) => {
    console.log(message);
  }
);


//new function
function divide(a, b) {
  return new Promise(function (resolve, reject) {
    if (b === 0) {
      reject(new Error("You can't divide by 0"));
      return;
    }

    resolve(a / b);
  });
}

console.log(divide(20, 0));

divide(10, 2)
  .then(function (result) {
    console.log(`Division Success: ${result}`);
  })
  .catch(function (error) {
    console.log("There was an error: " + error);
  });


  //new function
function wait(ms) {
  return new Promise(function (resolve, reject) {
    if (ms <= 0) {
      reject(new Error("Cannot wait for 0 seconds or less"));
      return;
    }

    setTimeout(function () {
      resolve("Hey");
    }, ms);
  });
}

wait(0)
  .then(function (message) {
    console.log("We have waited 1 sec " + message);
  })
  .catch(function (error) {
    console.log(`There was an error: ${error.message}`);
  });




const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chatroom'
});

connection.connect(function(err) {
  if(err) {
    console.log('There was an error:( ');
  }

  console.log('Connection successfull!');
  connection.end();
});






























