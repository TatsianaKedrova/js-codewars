// // christmas tree

// function christmasTree(height) {
//   // height is the number of lines

//   if (height < 0 || height > 100) return;

//   let finalStr = "";
//   for (let i = 1; i <= height; i++) {
//     let star = String.fromCodePoint(42);

//     let count = height + ( height - 1);
//       finalStr += `\n${star.repeat(count)}`;
//     // finalStr += star;

//     // if(height === 1) {
//     //   return finalStr;
//     // } else {
//     //   let count = height + ( height - 1);
//     //   finalStr += `\n${star.repeat(count)}`;
//     // }

//     return finalStr;
   
//   }

//   return finalStr;
// }

// console.log(christmasTree(3));


// // console.log(String.fromCodePoint(42).repeat(10));

// function xmas(height) {
//   // add 1 more level for the trunk, e.g. height+1
//   return Array.from({length: height}, (v, i) => {
//       return i === height
//           // that's for the trunk of the tree
//           ? '*'.padStart(Math.round((2 * i)/2), ' ')
//           // the actual tree "levels"
//           : '*'.repeat(2 * i + 1).padStart(2 * i + height-i, ' ');
//   }).join('\n');
// }

// console.log(xmas(1));


// let arr = Array.from([1,2,3], x => x + x);
// console.log(arr);


//curring - каррирование

function fn(a, b) {

}

function multiply(a,b,c) {
  return a*b*c;
}

console.log(multiply(2,3,4));

function _multiply(a) {
  return (b) => {
    return (c) => {
      return a*b*c
    }
  }
}

console.log(_multiply(2)(4)(5));