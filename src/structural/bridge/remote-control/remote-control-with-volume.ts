import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(`Remote: volume down ${this.device.getVolume()}`);
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(`Remote: volume up ${this.device.getVolume()}`);
  }
}
