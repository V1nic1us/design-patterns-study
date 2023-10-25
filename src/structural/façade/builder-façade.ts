import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuildeFaçade {
  public mainDishBuilder = new MainDishBuilder();
  public veganDishBuilder = new VeganDishBuilder();

  public makeMeal1(): void {
    // mainDishBuilder.makeMeal().makeBeverage();
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  public makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
    console.log(meal2);
  }

  public makeMeal3(): void {
    this.veganDishBuilder.makeMeal().makeBeverage();
    console.log(this.veganDishBuilder);
    console.log(this.veganDishBuilder.getMeal());
  }
}
