import { DeviceImplementation } from './device-implementation';

export class Radio implements DeviceImplementation {
  private name = 'Radio';
  private volume = 0;
  private enabled = false;

  getName(): string {
    return this.name;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
    console.log(`${this.name} enabled`);
  }

  disable(): void {
    this.enabled = false;
    console.log(`${this.name} disabled`);
  }

  getVolume() {
    return this.volume;
  }

  setVolume(volume: number) {
    if (volume > 0 && volume < 100) {
      this.volume = volume;
    }
    return;
  }
}
