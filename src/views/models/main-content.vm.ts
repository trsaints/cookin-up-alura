import type { Ref } from "vue";
import type { IMainContentViewModel } from "./interfaces/imain-content.vm";
import type { SelectedPage } from "@/data/types/SelectedPage";

export class MainContentViewModel implements IMainContentViewModel {
  private ingredients: Ref<string[]>;
  private selectedPage: Ref<SelectedPage>;

  constructor(ingredients: Ref<string[]>, selectedPage: Ref<SelectedPage>) {
    this.ingredients = ingredients;
    this.selectedPage = selectedPage;
  }

  renderRecipeSelection(): void {
    this.selectedPage.value = "MostrarReceitas";
  }

  addIngredient(newIngredient: string): boolean {
    if (this.ingredients.value.includes(newIngredient)) return false;

    this.ingredients.value.push(newIngredient);

    if (this.ingredients.value.includes(newIngredient)) return true;

    return false;
  }

  removeIngredient(ingredient: string): boolean {
    const index = this.ingredients.value.indexOf(ingredient);

    if (index === -1) return false;

    this.ingredients.value.splice(index, 1);

    return true;
  }
}
