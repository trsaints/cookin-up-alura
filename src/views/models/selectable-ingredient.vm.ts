import type { SelectableIngredientEmitFn } from "@/data/types/SelectableIngredientEmitFn";
import type { ISelectableIngredientViewModel } from "./interfaces/iselectable-ingredient.vm";

export class SelectableIngredientViewModel
  implements ISelectableIngredientViewModel
{
  private emit: SelectableIngredientEmitFn;

  constructor(emit: SelectableIngredientEmitFn) {
    this.emit = emit;
  }

  handleSelection(isSelected: boolean, ingredient: string): void {
    isSelected = !isSelected;

    if (!isSelected) return;

    this.emit("addIngredient", ingredient);
  }
}
