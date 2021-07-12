// async await

const waitAndGet = (waitingTime) => {
    
    return new Promise((res, rej) => {
        let randomNum = Math.random();
        let resOrRej = Math.random();
            setTimeout(() => {
               resOrRej <= 0.5 ? res(randomNum) :  rej()     
            }, waitingTime * 1000)
    })
}


const start = async () => waitAndGet(3);
// {
//     try {
//         const randNumber = await waitAndGet(3);
//         console.log(randNumber)
//     } catch {
//         return Promise.reject();
//     }

// }

// console.log(start());

// Promise.all([start(), start(), start()]).then((result)=> {
//     console.log(result)
// }).catch(err => console.log('one or more promises not generated',  err));



// const hungry = true;

// const eat = new Promise((res, rej) => {
//     if(hungry) {
//         const fastfood = {
//             activity: 'cook noodles',
//             location: 'McDonalds'
//         };
//         res(fastfood)
//     } else {
//         rej(err => new Error('Not hungry'))
//     }
// });

// const willEat = function() {
//     eat
//         .then(result => {
//         console.log('Going to eat noodles');
//         console.log(hungry);
//     })
//         .catch(err => console.log(err.message))
// }

// console.log(willEat())






























