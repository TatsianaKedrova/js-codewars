//Immer

const baseState = [

    {
        title: "Tania Junior React Developer",
        done: true
    },
    {
        title: "Tania Senior React Developer",
        done: true
    }

];

const nextState = baseState.slice();
nextState[1] = {
    ...nextState[1],
    done: true
}

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
const {name, realName} = hero;

console.log(name);
console.log(realName);
