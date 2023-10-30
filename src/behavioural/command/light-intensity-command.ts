import { SmartHouseCommand } from './command';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.increaseIntensity();
  }

  undo(): void {
    this.light.decreaseIntensity();
  }
}
