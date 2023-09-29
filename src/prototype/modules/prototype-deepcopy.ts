export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public address: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.address = this.address.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.address.push(address);
  }
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public number: number,
  ) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Av. Brasil', 15);
const person1 = new Person('John', 30);
person1.addAddress(address1);
const person2 = person1.clone();

person1.address[0].street = 'Bla bla bla';

person2.name = 'Doe';
console.log(person1);
console.log(person2);
