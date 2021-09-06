//write oen map function

let array1 = [1,2,3,4,5];
function mapOwn(arr, mapFunc) {
    const mapArr = [];
    for(let i = 0; i < arr.length; i++) {
        const result = mapFunc(arr[i], i, arr);
        mapArr.push(result);
    }
    return mapArr;
}

const la = mapOwn(array1, x => x * 3);
console.log(la);


function vladka() {
    a = 3;
}

if(true) { var a = 2}
vladka();

console.log("value", a);

//var, let, const

// console.log(c);
let c = 10;


var d;
console.log(d);
d =10;
console.log(d);
console.log(e);
var e = 2000;


