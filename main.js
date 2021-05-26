//GROWTH OF POPULATION

function nbYear(p0, percent, aug, p) {
let year = 0;
let result;
for( let popul = p0; popul < p; popul = result) {
  result = popul + popul*percent + aug;
  year++;
}
return year;

}
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));

let a = 5;
for( let i = 0; i < 10; i++) {
  a =+ 5;
}
console.log(a);

let text='';
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

console.log(text);