import type { Ref } from "vue";
import type { IMainContentViewModel } from "./interfaces/imain-content.vm";

export class MainContentViewModel implements IMainContentViewModel {
  private ingredients: Ref<string[]>;

  constructor(ingredients: Ref<string[]>) {
    this.ingredients = ingredients;
  }

  addIngredient(newIngredient: string, ingredients: string[]): boolean {
    if (ingredients.includes(newIngredient)) return false;

    ingredients.push(newIngredient);

    if (ingredients.includes(newIngredient)) return true;

    return false;
  }
}
