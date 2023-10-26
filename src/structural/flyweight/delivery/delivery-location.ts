import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, address: string): void {
    console.log(`Delivering to ${name} at ${address}`);
    console.log(`Delivering to ${this.intrinsicState.city} at ${this.intrinsicState.street}`);
  }
}
