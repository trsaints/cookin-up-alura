<script setup lang="ts">
import { ref } from "vue";
import type { SelectableIngredientEmits } from "../../emits/selectable-ingredient-emits";
import { SelectableIngredientViewModel } from "@/views/models/selectable-ingredient.vm";
import type { SelectableIngredientProps } from "@/views/props/selectable-ingredient-props";
import IngredientTag from "../ingredient-tag.vue";

const props = defineProps<SelectableIngredientProps>();

const isSelected = ref(false);

var emit = defineEmits<SelectableIngredientEmits>();

const vm = new SelectableIngredientViewModel(emit, isSelected);
</script>

<template>
  <button @click="() => vm.handleSelection(props.ingredient)">
    <IngredientTag :texto="props.ingredient" :ativa="isSelected" />
  </button>
</template>
