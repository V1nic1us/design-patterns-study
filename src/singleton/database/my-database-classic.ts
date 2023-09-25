import { User } from '../interface/User';

export class MyDatabaseClassic {
  private static _instance?: MyDatabaseClassic;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (!MyDatabaseClassic._instance) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

// const myDatabaseClassic = MyDatabaseClassic.getInstance();
// const myDatabaseClassic2 = MyDatabaseClassic.getInstance();
// console.log(myDatabaseClassic === myDatabaseClassic2);
