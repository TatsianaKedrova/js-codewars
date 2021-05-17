
function printerError(s) {
  
  let numerator = s.split("").map((e, i) => s.charCodeAt(i) >= 110 ? "oops" : e ).reduce((acc, current) => {

    if(current === "oops") {
      return acc + 1;
    } 
    return acc;
  }, 0);

  let denominator = s.length;
  let errorRate = `${numerator} / ${denominator}`;

  return errorRate;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
console.log(printerError("avbnjxdtfrgsxyz"));



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



















