<script setup lang="ts">
import { ref } from "vue";
import Tag from "../Tag.vue";
import type { SelectableIngredientEmits } from "../../emits/selectable-ingredient-emits";
import { SelectableIngredientViewModel } from "@/views/models/selectable-ingredient.vm";

const props = defineProps<{
  ingredient: string;
}>();

const isSelected = ref(false);

var emit = defineEmits<SelectableIngredientEmits>();

const vm = new SelectableIngredientViewModel(emit);
</script>

<template>
  <button @click="() => vm.handleSelection(isSelected, props.ingredient)">
    <Tag :texto="props.ingredient" :ativa="isSelected" />
  </button>
</template>
