//null vs undefined

let _thisIsUndefined;
const doNothing = () => {}
const someObj = {
    a: 'ay',
    b: 'bee',
    c: 'si'
}
console.log(_thisIsUndefined) // undefined
console.log(doNothing()) // undefined
console.log(someObj['d']) // undefined


