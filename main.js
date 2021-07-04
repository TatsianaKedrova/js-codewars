//this keyword

const module = {
    x: 42,
    getX() {
        return this.x;
    }
}

console.log(module.getX());
const unboundGetX = module.getX;
const boundFetX = unboundGetX.bind(module);

console.log(boundFetX());
