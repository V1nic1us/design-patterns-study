import { VehicleProtocol } from '../../interfaces/vehicle';
import { CustomerProtocol } from '../../interfaces/customer';
import { EnterpriseCustomer } from '../customer/EnterpriseCustomer';
import { EnterpriseVehicle } from '../vehicle/EnterpriseVehicle';
import { CreateVehicleCustomerProtocol } from './customer-vehicle-factory';

export class EnterpriseCreateVehicleCustomerFactory implements CreateVehicleCustomerProtocol {
  createCustomer(customerName: string): CustomerProtocol {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, customer);
  }
}
