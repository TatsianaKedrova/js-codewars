//recursion
function pow(x,n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(5,3));


//recursion
function pow2(x, n) {
    if(n === 1) {
        return x;
    } else if (n === 0) {
        return 1;
    } else {
        return x * pow2(x, n - 1);
    }
}

console.log(pow2(5,3));

function pow3(x, n) {
  return (n === 1) ? x : (x * pow3(x, n - 1));
}

console.log(pow3(5,3));


//LinkedList

class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

//tasks

function f() {
    var a = b = 10;
}

console.log(f());
// console.log(a);
console.log(b);


function f2() {
    var a = 10;
}

// console.log(a);

if(true) {
    var b = 100;
    let c = 10;
}

console.log(b);
// console.log(c);


//scope

const message = "Hello";
console.log(message);


