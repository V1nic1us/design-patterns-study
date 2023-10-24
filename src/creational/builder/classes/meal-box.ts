import { MealCompositeProtocol } from '../interface/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  constructor() {
    this._children = [];
  }

  add(...meal: MealCompositeProtocol[]) {
    meal.forEach((item) => this._children.push(item));
  }

  getPrice() {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }
}
