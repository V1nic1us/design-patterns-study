import { MealCompositeProtocol } from '../interface/meal-composite-protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(
    private name: string,
    private price: number,
  ) {}

  getPrice(): number {
    return 5;
  }
}
