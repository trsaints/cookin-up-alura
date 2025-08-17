import type { IMainContentViewModel } from "./interfaces/imain-content.vm";

export class MainContentViewModel implements IMainContentViewModel {
  addIngredient(newIngredient: string, ingredients: string[]): boolean {
    if (ingredients.includes(newIngredient)) return false;

    ingredients.push(newIngredient);

    if (ingredients.includes(newIngredient)) return true;

    return false;
  }
}
