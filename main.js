//this

this.x = 9;

console.log(" x: ", x);
console.log(this);

const module = {
    x: 81,
    getX: function() {
        // console.log("this inside objetc module: ", this);
        return this.x;
    }
}

console.log(module.getX());

const retrieveX = module.getX;
retrieveX(); 
const boundX = retrieveX.bind(module);
boundX();