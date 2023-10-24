import { IndividualCreateCustomerCustomerFactory } from './classes/factories/individual-customer-vehicle-factory';
import { EnterpriseCreateVehicleCustomerFactory } from './classes/factories/enterprise-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateCustomerCustomerFactory();

const vehicle = enterpriseFactory.createVehicle('Ferrari', 'Marcus');
const vehicle2 = individualFactory.createVehicle('Ferrari', 'Marcus');

vehicle.pickUp();
vehicle2.pickUp();
