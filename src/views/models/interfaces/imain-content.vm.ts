export interface IMainContentViewModel {
  addIngredient(newIngredient: string): boolean;
  removeIngredient(ingredient: string): boolean;
  renderIngredientsSelection(): void;
  renderRecipeSelection(): Promise<void>;
  loadRecipes(): Promise<boolean>;
}
