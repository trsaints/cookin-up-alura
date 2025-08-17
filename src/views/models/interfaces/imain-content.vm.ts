import type { Ref } from "vue";

export interface IMainContentViewModel {
  addIngredient(newIngredient: string, ingredients: string[]): boolean;
}
