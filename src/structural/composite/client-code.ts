import { ProductComposite, ProductLeaf } from './classes/product-component';

const pen = new ProductLeaf('Pen', 2);
const smartphone = new ProductLeaf('Smartphone', 5000);
const tshirt = new ProductLeaf('T-Shirt', 30);

const productBox = new ProductComposite();
productBox.add(pen, smartphone, tshirt);

const tablet = new ProductLeaf('Tablet', 2000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox.getPrice()); // 7332
productBox.remove(anotherProductBox);
console.log(productBox.getPrice()); // 5032
