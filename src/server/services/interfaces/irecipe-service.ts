import type { Recipe } from "@/data/models/Recipe";

export interface IRecipeService {
  getAll(): Promise<Recipe[]>;
}
