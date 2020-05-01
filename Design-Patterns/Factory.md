## Factory Pattern

* Object creational pattern
* When Object creation logic become too sophisticated.
* Initializer is not descriptive - When there is chance that the initializer can turn into a 'optional parameter hell'
* Wholesale object creation (non-piecewise, unlike Builder) can be outsourced to
  * A separate method (Factory Method)
  * That may exist in a seprate class (Factory)
  * Can create hierarchy of factories (Abstract Factory)
  
### Definition
A component responsible solely for the wholesale (not piecewise) creation of objects.

### Why factories are required?
* They allow you to create objects at a centralized location.
* This keeps the code very clean

### Example

```js
function Developer(name) {
 this.name = name;
 this.type = 'Developer';
}

function Tester(name) {
 this.name = name;
 this.type = 'Tester';
}

function EmployeeFactory() {
 this.create = (name, type) => {
  switch(type) {
   case 1: return new Developer(name);
   case 2: return new Tester(name);
  }
 }
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create('Patrick', 1));
employees.push(employeeFactory.create('Bob', 2));

console.log(employees);
```
