import type { Recipe } from "@/data/models/Recipe";

export interface IRecipeService {
  getAllRecipes(): Promise<Recipe[]>;
}
