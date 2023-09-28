import { MealBuilderProtocol } from '../interface/meal-buider-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Rice } from './rice';
export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this._meal.add(rice, beans);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Suco de Uva', 5);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Pudim', 7);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
