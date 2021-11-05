//array move an item
// import 'array.prototype.move';  

let arr = ["apple", "orange", "grapes", "tomato", "pomegranate", "lemon", "strawberry"];

const moveMyStory = (arr) => {
    const newArr = arr.splice(0, 0, arr.splice(2, 1).toString());
    return arr;
}

console.log(moveMyStory(arr));