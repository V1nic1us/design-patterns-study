import { CustomerProtocol } from '../../interfaces/customer';
import { VehicleProtocol } from '../../interfaces/vehicle';

export class EnterpriseVehicle implements VehicleProtocol {
  constructor(
    public name: string,
    public customer: CustomerProtocol,
  ) {}

  public pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name} (ENTERPRISE)`);
  }
}
