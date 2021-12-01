class Greeting {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello ${this.greeting}`;
  }
}

let greeter = new Greeting("Taniusha");
console.log("greeter: ", greeter);

class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m`);
  }
}

class Snake extends Animal{
  constructor(name: string) {
      super(name);
  }
  move(distanceInMeters = 5) {
      console.log("Slithering... ");
      super.move(distanceInMeters)
      
  }
}


enum  Direction {
    Up = 1,
    Down, 
    Left, Right
}

