import { DiscountStrategy } from './discount-strategy';
import { ECommerceProductProtocol } from './ecommerce-product-protocol';

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(discount: DiscountStrategy): number {
    return discount.getDiscount(this);
  }

  setDiscountStrategy(discountStrategy: DiscountStrategy): void {
    this.discountStrategy = discountStrategy;
  }
}
