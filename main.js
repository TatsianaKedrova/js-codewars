
function lastSurvivor(letters, coords) {
  if(letters.length === (coords.length + 1)) {
    if(letters.length === 1 && coords.length === 0) {
      return letters;
    }

    let str = [...letters];
    coords.forEach((el) => {
      let a = str.splice(el, 1)
      console.log(a)
    })
    return str.join('');
    // let iteration = coords.filter((el, index) => el === str[el])
    // return iteration;
    // let str = [...letters].map((letter, index) => coords.includes(index) ? "oops" : letter);
    // return str;
  } 
}

console.log(lastSurvivor('abd', [0,1]));

let a = ["a","b","c","d","e"];

console.log(a.indexOf("a"));
console.log(a.splice(1,1));
console.log(a.splice(0,1));
console.log(a);































// //DEEP COPY VS SHALLOW COPY


// let a = {
//   name: 'Tatiana Kedrova',
//   protocol: 'https',
//   maxStudentsCount: 10,
//   isOnline: true,
//   students: ['ivan', 'andrey', 'farid'],
//   classromm: {
//     teacher: {
//       name: 'Jack',
//       age: 18
//     }
//   }
// }

// //a = 'spec-url/asd/ddd'
// //b = a b 'spec-url/asd/ddd'. === > students //'spec-url/students/'


// let b = a;
// console.log(b);
// console.log(b === a);
// console.log(b.students === a.students);

// b.name = 'Nadin Sherif';
// b.students = ['john','patrick', 'james'];
// console.log(a.name);
// console.log(a.students);

// let c = {...a};
// //c = 'spec-url/sss/'. === > students //'spec-url/students/'
// console.log(c);
// console.log(c === a);
// console.log(c.students === a.students);
// c.name = "Stats";
// console.log(c.name);
// console.log(a.name);
// c.students.push("tania");
// console.log(c.students);
// console.log(a.students);

// b.classromm.teacher.name = "sherif";
// console.log(b.classromm.teacher.name);

// c.classromm = {...a.classromm};
// c.classromm.teacher = {...a.classromm.teacher};
// c.students = [...a.students];
// console.log(a.students === c.students);

// c.classromm.teacher.name = "nataly";
// console.log(c.classromm.teacher.name);
// console.log(a.classromm.teacher.name);

// let d = {...a};
// console.log(a === d);
// console.log(a.name === d.name);
// console.log(a === d);
// console.log(a === d);
// console.log(a === d);
// console.log(a === d);
















// //PRINTER ERROS first variant
// function printerError(s) {
  
//   let numerator = s.split("").map((e, i) => s.charCodeAt(i) >= 110 ? "oops" : e ).reduce((acc, current) => {

//     if(current === "oops") {
//       return acc + 1;
//     } 
//     return acc;
//   }, 0);

//   let denominator = s.length;
//   let errorRate = `${numerator} / ${denominator}`;

//   return errorRate;
// }

// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
// console.log(printerError("avbnjxdtfrgsxyz"));


// //PRINT ERROR second variant
// function printError(s) {
//   return s.match(/[^a-m]/g).length + "/" + s.length;
// }

// console.log(printError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
// console.log(printError("avbnjxdtfrgsxyz"));




// let str3 = "avbnjxdtfrgsxyz";
// let newStr = str3.split("");
// console.log(newStr);
// let an = newStr.map((e, i) => str3.charCodeAt(i) >= 110 ? "oops" : e ).reduce((acc, current) => {

//   if(current === "oops") {
//     return acc + 1;
//   } 
//   return acc;
// }, 0);
// let result = newStr.reduce((acc, current) => )
// console.log(an);

// const indexOfLetters = [...Array(13).keys()].map((e, i) => i + 110);
// let correctColors = indexOfLetters.map((x) => String.fromCharCode(x));
// console.log(correctColors);




















