import { MyDatabaseClassic } from '../database/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });

export { myDatabaseClassic };
