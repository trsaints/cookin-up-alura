import type { SelectableIngredientEmits } from "@/views/emits/selectable-ingredient-emits";

export type SelectableIngredientEmitFn = <K extends keyof SelectableIngredientEmits>(
  event: K,
  ...args: SelectableIngredientEmits[K]
) => void;
