function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Hello';
}

Person.prototype = personPrototype;
Person.prototype.constructor = Person; // Reset the constructor property

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson; // Reset the constructor property

const person1 = new Person('John', 'Doe', 30);
console.log(person1);
console.log(person1.firstName); // John
console.log(person1.fullName()); // John Doe

const person2 = new SubPerson('Mary', 'Doe', 30);
console.log(person2);
console.log(person2.firstName); // Mary
console.log(person2.fullName()); // Mary Doe
