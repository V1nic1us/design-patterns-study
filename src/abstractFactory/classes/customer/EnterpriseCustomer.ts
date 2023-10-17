import { CustomerProtocol } from '../../interfaces/customer';

export class EnterpriseCustomer implements CustomerProtocol {
  constructor(public name: string) {
    this.name = `${name} (ENTERPRISE)`;
  }
}
