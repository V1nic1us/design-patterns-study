import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private name: string) {}

  pickup(customerName: string): void {
    console.log(`${this.name} is picking up ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} stopped`);
  }
}
