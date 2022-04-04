function Developer(name) {
  this.name = name;
  this.type = "Deeveloper";
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

function say() {
  console.log("Hello, " + this.name + " " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Tatiana Kedrova", 1));
console.log(employees);
employees.push(employeeFactory.create("Nadin Sherif", 2));

console.log(employees);

for (let member of employees) {
  say.apply(member);
}
