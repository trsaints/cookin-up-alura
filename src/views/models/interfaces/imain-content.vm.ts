export interface IMainContentViewModel {
  addIngredient(newIngredient: string): boolean;
  removeIngredient(ingredient: string): boolean;
  renderRecipeSelection(): void;
}
