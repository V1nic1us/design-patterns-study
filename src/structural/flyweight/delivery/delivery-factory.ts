import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';
import { DeliveryLocationData, DeliveryLocationDictionary } from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((value) => value.replace(/\s+/, '').toLocaleLowerCase())
      .join('-');
  }

  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrinsicState);

    if (key in this.locations) {
      return this.locations[key];
    }
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
