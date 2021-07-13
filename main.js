// async await



const createUniqueNameGen = (uniqueName) => {
let counter = 1;
    
    return () => {
        let arr = uniqueName.split('');
        if(arr.includes('.')) {
            let indexBeforeDot = arr.indexOf('.');
            arr.splice(indexBeforeDot, 0, counter)
        }
        counter++;
        return arr.join('');
    }
}

const generator1 = createUniqueNameGen("song.mp3");
const generator2 = createUniqueNameGen("tania-dance.com");

console.log(generator1());
console.log(generator1());
console.log(generator1());
console.log(generator1());
console.log(generator2());
console.log(generator1());
console.log(generator1());
console.log(generator1());

// const exampleFunc = (uniqueName) => {
//     let counter = 1;
//     return () => {
//         let arr = uniqueName.split('.');
//         let result = arr[0] + counter;
//         counter++;
//         return result;
//     }   
// }

// const func1 = exampleFunc("teddyBear.com");
// console.log(func1());
// console.log(func1());
// console.log(func1());
// console.log(func1());
// console.log(func1());
// console.log(func1());






































// const waitAndGet = (waitingTime) => {
    
//     return new Promise((res, rej) => {
//         let randomNum = Math.random();
//         let resOrRej = Math.random();
//             setTimeout(() => {
//                resOrRej <= 0.5 ? res(randomNum) :  rej()     
//             }, waitingTime * 1000)
//     })
// }


// const start = async () => waitAndGet(3);
































