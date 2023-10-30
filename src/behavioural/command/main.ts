import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomlight = new SmartHouseLight('Luz da Sala');
const bathroomlight = new SmartHouseLight('Luz do Banheiro');

// Commands
const bedroomlightPowerCommand = new LightPowerCommand(bedroomlight);
const bathroomlightPowerCommand = new LightPowerCommand(bathroomlight);
const bedroomIntensityCommand = new LightPowerCommand(bathroomlight);

// Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomlightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomlightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand);

smartHouseApp.executeCommands('btn-1');
smartHouseApp.undoCommands('btn-1');

smartHouseApp.executeCommands('btn-2');
smartHouseApp.undoCommands('btn-2');

smartHouseApp.executeCommands('btn-3');
smartHouseApp.undoCommands('btn-3');

// lightPowerCommand.execute();
// lightPowerCommand.undo();
