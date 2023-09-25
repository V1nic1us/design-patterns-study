import { MyDatabaseClassic } from '../database/my-database-classic';
import { myDatabaseClassic } from './module1';

const myDatabaseClassic2 = MyDatabaseClassic.instance;
myDatabaseClassic2.add({ name: 'Roberto', age: 30 });
myDatabaseClassic2.add({ name: 'Joana', age: 50 });
myDatabaseClassic2.add({ name: 'Luiza', age: 25 });
myDatabaseClassic2.remove(1);
myDatabaseClassic2.show();

console.log(myDatabaseClassic === myDatabaseClassic2);
