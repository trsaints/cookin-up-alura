import type { Ref } from "vue";
import type { IMainContentViewModel } from "./interfaces/imain-content.vm";
import type { SelectedPage } from "@/data/types/SelectedPage";
import type { IRecipeService } from "@/server/services/interfaces/irecipe-service";
import type { Recipe } from "@/data/models/Recipe";

export class MainContentViewModel implements IMainContentViewModel {
  private ingredients: Ref<string[]>;
  private recipes: Ref<Recipe[]>;
  private selectedPage: Ref<SelectedPage>;
  private recipeService: IRecipeService;

  constructor(
    ingredients: Ref<string[]>,
    recipes: Ref<Recipe[]>,
    selectedPage: Ref<SelectedPage>,
    recipeService: IRecipeService
  ) {
    this.ingredients = ingredients;
    this.recipes = recipes;
    this.selectedPage = selectedPage;
    this.recipeService = recipeService;
  }

  renderIngredientsSelection(): void {
    this.selectedPage.value = "SelecionarIngredientes";
  }

  async loadRecipes(): Promise<boolean> {
    const recipes = await this.recipeService.getAll();

    if (recipes.length === 0) return false;

    this.recipes.value = recipes;

    return true;
  }

  async renderRecipeSelection(): Promise<void> {
    if (this.ingredients.value.length === 0) return;

    const hasLoaded = await this.loadRecipes();

    if (!hasLoaded) return;

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
