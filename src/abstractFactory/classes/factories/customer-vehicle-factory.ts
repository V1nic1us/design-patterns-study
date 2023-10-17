import { CustomerProtocol } from '../../interfaces/customer';
import { VehicleProtocol } from '../../interfaces/vehicle';

export interface CreateVehicleCustomerProtocol {
  createCustomer(customerName: string): CustomerProtocol;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
