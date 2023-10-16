import { CarFactory } from './factories/carFactory';
import { randomCarAlgorithm } from './random-car/randomCar';
import { getRandomNumbers } from './utils/randomNumbers';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'John', 'Jane', 'Melissa', 'Paul', 'Mark'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const customerName = customerNames[getRandomNumbers(customerNames.length)];
  vehicle.pickup(customerName);
  vehicle.stop();
  const newCar = carFactory.pickUp(customerName, `New Car - ${getRandomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
