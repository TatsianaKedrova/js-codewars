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
        return new Error("This number is not acceptable fir the system");
    })
// return randomNum;
}

const start = async () => {
    try {
        const randNumber = await waitAndGet(3);
        console.log(randNumber)
    } catch {
        console.log("number not generated");
    }

}

console.log(5);