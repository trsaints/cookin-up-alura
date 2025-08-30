export interface IMainContentViewModel {
  addIngredient(newIngredient: string): boolean;
  removeIngredient(ingredient: string): boolean;
  renderRecipeSelection(): Promise<void>;
  loadRecipes(): Promise<boolean>;
}
