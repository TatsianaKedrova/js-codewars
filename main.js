// closures


function makeWorker() {
    let name = "Pete";
    let jake = "Jake";
    

    return function() {
        console.log(name);
    };
}

let name = "John";
let work = makeWorker();

console.log(work);
