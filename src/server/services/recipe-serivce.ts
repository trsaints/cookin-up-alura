import type { Recipe } from "@/data/models/Recipe";
import type { IRecipeService } from "./interfaces/irecipe-service";

export class RecipeService implements IRecipeService {
  byIngredients(recipes: Recipe[], ingredients: string[]): Recipe[] {
    return recipes.filter((r) =>
      ingredients.every((i) => r.ingredientes.includes(i))
    );
  }

  async getAll(): Promise<Recipe[]> {
    const response = await fetch(
      "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
    );

    return (await response.json()) as Recipe[];
  }
}
