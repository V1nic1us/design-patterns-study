import { ConcreteMemento } from './concrete-memento';
import { Memento } from './memento';

export class ImageEditor {
  constructor(
    private filePath: string,
    private fileFormat: string,
  ) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += `.${format}`;
  }

  // save(): ImageEditorMemento {
  //   return new ImageEditorMemento(this.filePath, this.fileFormat);
  // }

  save(): Readonly<Memento> {
    const date = new Date();
    return new ConcreteMemento(date.toISOString(), date, this.filePath, this.fileFormat);
  }

  restore(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}

const a = new ImageEditor('/user/image.png', 'png');
a.convertFormatTo('jpg');
console.log(a);
