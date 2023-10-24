import { DeviceImplementation } from '../device/device-implementation';

export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower() {
    console.log(`Remote: power toggle ${this.device.isEnabled() ? 'ON' : 'OFF'}`);
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
}
