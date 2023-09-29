export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public address: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.address.push(address);
  }
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

const address1 = new Address('Av. Brasil', 15);
const person1 = new Person('John', 30);
person1.addAddress(address1);
person1.address[0].street = 'Bla bla bla';
const person2 = person1.clone();

console.log(person1, person2);
person2.name = 'Doe';
console.log(person2.name);
console.log(person2.address);
