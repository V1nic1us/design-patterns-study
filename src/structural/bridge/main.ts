import { Radio } from './device/radio';
import { TV } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clientCode(abstration: RemoteControl | RemoteControlWithVolume) {
  abstration.togglePower(); // power on
  if (abstration instanceof RemoteControlWithVolume) {
    abstration.volumeUp();
    abstration.volumeDown();
  }
  abstration.togglePower(); // power off
}

const tv = new TV();
const radio = new Radio();

const remoteControl = new RemoteControlWithVolume(radio);
clientCode(remoteControl);

console.log('---');

const remoteControl2 = new RemoteControlWithVolume(tv);
clientCode(remoteControl2);
