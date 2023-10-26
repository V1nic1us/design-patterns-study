import { DeliveryLocation } from './delivery-location';

export type DeliveryLocationData = {
  readonly city: string;
  readonly street: string;
};

export type DeliveryLocationDictionary = {
  [key: string]: DeliveryLocation;
};
