function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

function sayHello() {
  console.log("Hello " + this.name + ", you are a " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create("Tania", 1));
employees.push(employeeFactory.create("Stas", 2));
employees.push(employeeFactory.create("Elena", 2));
employees.push(employeeFactory.create("Jenia", 1));
employees.push(employeeFactory.create("Liosha", 1));
employees.push(employeeFactory.create("Olesya", 2));

console.log(employees);
employees.forEach(emp => {
  sayHello.call(emp)
})
// console.log();
