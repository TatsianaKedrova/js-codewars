// async await

const waitAndGet = (waitingTime) => {
    let randomNum = Math.random();
    let resOrRej = Math.random();
    resOrRej < 0.5 ? 
    setTimeout( () => {
        return Promise.resolve(randomNum);
    }, waitingTime * 1000 )
    : 
    setTimeout(() => {
        return Promise.reject();
    })
// return randomNum;
}

const _waitAndGet = (sec) => {

    return new Promise(() => {})

}

const start = async () => {
    try {
        const randNumber = await waitAndGet(3);
        console.log(randNumber)
    } catch {
        console.log("number not generated");
    }

}

console.log(start());