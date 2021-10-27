//regex

const value = '1277775555';
const value2 = '295312794';
// const newVal = value.split('');
// const spliceVal = newVal.splice(4,0,'-').join('');

// console.log(newVal);
// console.log(newVal.join(''));


console.log(value.replace(/(\d{4})(\d{4})(\d{2})/, "$1-$2-$3"));
console.log(value2.replace(/(\d{4})(\d{4})(\d{1})/, "$1-$2-$3"));
console.log(value2.replace(/[\d]{4}/g, '$&-'));

console.log( "Люблю HTML".replace(/HTML/, "$& и JavaScript"));