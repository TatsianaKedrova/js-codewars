//strings javascript

let str = 'Vasiliy Lanovoi';
console.log(str.includes(" "));
console.log(str.indexOf(" "));
if(str.includes(' ')) {
    console.log( `${str.slice(0,1)}${str.slice(str.indexOf(' ')+1, str.indexOf(' ')+2)}`);
};