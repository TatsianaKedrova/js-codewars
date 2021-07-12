// async await

const waitAndGet = (waitingTime) => {
    let randomNum = Math.random();
    let resOrRej = Math.random();
    if(resOrRej <= 0.5) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(randomNum)
            }, waitingTime * 1000)
        })
    } else {
        return new Promise((res, rej) => {
            setTimeout(() => {
                rej()
            }, waitingTime * 1000)
        })
    }
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

// setTimeout( () => {
    //     return new Promise((res, rej) => resolve(randomNum));
    // }, waitingTime * 1000 )
    // : 
    // setTimeout(() => {
    //     return new Promise((res,rej) => reject(new Error("there is nothing")));
    // })
    // return randomNum;