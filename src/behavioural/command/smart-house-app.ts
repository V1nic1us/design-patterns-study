import { SmartHouseCommand } from './command';

export class SmartHouseApp {
  private commands: { [key: string]: SmartHouseCommand } = {};

  addCommand(key: string, command: SmartHouseCommand) {
    this.commands[key] = command;
  }
  executeCommands(key: string) {
    this.commands[key].execute();
  }
  undoCommands(key: string) {
    this.commands[key].undo();
  }
}
