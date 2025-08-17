import type { Ref } from "vue";
import type { IMainContentViewModel } from "./interfaces/imain-content.vm";

export class MainContentViewModel implements IMainContentViewModel {
  private ingredients: Ref<string[]>;

  constructor(ingredients: Ref<string[]>) {
    this.ingredients = ingredients;
  }

  addIngredient(newIngredient: string): boolean {
    if (this.ingredients.value.includes(newIngredient)) return false;

    this.ingredients.value.push(newIngredient);

    if (this.ingredients.value.includes(newIngredient)) return true;

    return false;
  }
}
