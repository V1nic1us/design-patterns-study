export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(private name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} is now ON`);
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} is now OFF`);
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity < 100) {
      this.intensity += 1;
      console.log(`${this.name} intensity is now ${this.intensity}`);
      return this.intensity;
    }
    return this.intensity;
  }

  decreaseIntensity(): number {
    if (this.intensity > 0) {
      this.intensity -= 1;
      console.log(`${this.name} intensity is now ${this.intensity}`);
      return this.intensity;
    }
    return this.intensity;
  }
}
