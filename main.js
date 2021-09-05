//write oen map function

function mapOwn(arr, mapFunc) {
    const mapArr = [];
    for(let i = 0; i < arr.length; i++) {
        const result = mapFunc(arr[i], i, arr);
        mapArr.push(result);
    }
    return mapArr;
}

const a = mapOwn(array1, x => x * 3);
console.log(a);
