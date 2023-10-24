import { MealCompositeProtocol } from './meal-composite-protocol';

export interface MealBuilderProtocol {
  makeMeal(): this;
  makeBeverage(): this;
  makeDessert(): this;
  getMeal(): MealCompositeProtocol;
}
