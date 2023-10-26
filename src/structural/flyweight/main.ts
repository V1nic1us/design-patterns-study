import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'John Doe', '123', 'Main Street', 'New York');
deliveryContext(factory, 'Marcus', '123', 'Main Street', 'New York');
deliveryContext(factory, 'Elysa', '4321', 'Main Street', 'New York');
deliveryContext(factory, 'Larissa', '2', 'One Street', 'Chicago');
deliveryContext(factory, 'Joao', '4321', 'Two Street', 'New York');

console.log('---');
console.log(factory.getLocations());
