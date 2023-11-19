import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/user/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('bnw');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor);
backupManager.undo();
console.log(imageEditor);
backupManager.undo();
console.log(imageEditor);
backupManager.undo();
console.log(imageEditor);
