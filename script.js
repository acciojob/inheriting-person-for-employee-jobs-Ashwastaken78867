// Define the Person constructor function
function Person(name, age) {
  this.name = name; // Assign name to the instance
  this.age = age;   // Assign age to the instance
}

// Add the greet method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Define the Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor to inherit name and age
  this.jobTitle = jobTitle;    // Assign jobTitle to the instance
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property back to Employee
Employee.prototype.constructor = Employee;

// Example usage
const employee1 = new Employee("Alice", 30, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Alice, I am 30 years old.
console.log(employee1.jobTitle); // Output: Software Engineer

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
