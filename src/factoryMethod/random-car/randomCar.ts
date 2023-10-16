import { BicycleFactory } from '../factories/bicycle';
import { getRandomNumbers } from '../utils/randomNumbers';
import { Vehicle } from '../vehicle/vehicle';
import { CarFactory } from '../factories/carFactory';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car = carFactory.makeVehicle('Ferrari');
  const car2 = carFactory.makeVehicle('Lamborghini');
  const bicycle = bicycleFactory.makeVehicle('Bicycle');
  const carArray = [car, car2, bicycle];
  return carArray[getRandomNumbers(carArray.length)];
}
