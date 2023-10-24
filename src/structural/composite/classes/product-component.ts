/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class ProductComponent {
  abstract getPrice(): number;
  add(productComponent: ProductComponent): void {}
  remove(productComponent: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(...productComponent: ProductComponent[]): void {
    for (const iterator of productComponent) {
      this.children.push(iterator);
    }
  }

  remove(productComponent: ProductComponent): void {
    const productIndex = this.children.indexOf(productComponent);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
}
