var Greeting = /** @class */ (function () {
    function Greeting(message) {
        this.greeting = message;
    }
    Greeting.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeting;
}());
var greeter = new Greeting("Taniusha");
console.log("greeter: ", greeter);
