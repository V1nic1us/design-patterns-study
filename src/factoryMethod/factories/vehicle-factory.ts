import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  abstract makeVehicle(name: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const vehicle = this.makeVehicle(vehicleName);
    vehicle.pickup(customerName);
    return vehicle;
  }
}
