const personPrototype = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person1 = Object.create(personPrototype);
person1.firstName = 'Mary';
console.log(person1);
console.log(person1.firstName); // Mary
console.log(person1.fullName()); // Mary Doe
