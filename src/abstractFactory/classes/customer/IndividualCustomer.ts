import { CustomerProtocol } from '../../interfaces/customer';

export class IndividualCustomer implements CustomerProtocol {
  constructor(public name: string) {
    this.name = `${name} (INDIVIDUAL)`;
  }
}
