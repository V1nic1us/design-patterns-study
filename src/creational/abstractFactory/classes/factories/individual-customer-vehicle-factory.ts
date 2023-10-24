import { CustomerProtocol } from '../../interfaces/customer';
import { VehicleProtocol } from '../../interfaces/vehicle';
import { IndividualCustomer } from '../customer/IndividualCustomer';
import { IndividualVehicle } from '../vehicle/IndividualVehicle';
import { CreateVehicleCustomerProtocol } from './customer-vehicle-factory';

export class IndividualCreateCustomerCustomerFactory implements CreateVehicleCustomerProtocol {
  createCustomer(customerName: string): CustomerProtocol {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualVehicle(vehicleName, customer);
  }
}
