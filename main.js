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


const start = async () => {
    try {
        const randNumber = await waitAndGet(3);
        console.log(randNumber)
    } catch {
        console.log("number not generated");
    }

}

// console.log(start());

