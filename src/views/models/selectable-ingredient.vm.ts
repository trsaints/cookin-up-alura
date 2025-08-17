import type { SelectableIngredientEmitFn } from "@/data/types/SelectableIngredientEmitFn";
import type { ISelectableIngredientViewModel } from "./interfaces/iselectable-ingredient.vm";
import type { Ref } from "vue";

export class SelectableIngredientViewModel
  implements ISelectableIngredientViewModel
{
  private emit: SelectableIngredientEmitFn;
  private isSelected: Ref<boolean>;

  constructor(emit: SelectableIngredientEmitFn, isSelected: Ref<boolean>) {
    this.emit = emit;
    this.isSelected = isSelected;
  }

  handleSelection(ingredient: string): void {
    this.isSelected.value = !this.isSelected.value;

    if (!this.isSelected) {
      this.emit("removeIngredient", ingredient);

      return;
    }

    this.emit("addIngredient", ingredient);
  }
}
