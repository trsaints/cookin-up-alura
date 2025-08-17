<script setup lang="ts">
import { ref } from "vue";
import Tag from "../Tag.vue";
import type { SelectableIngredientEmits } from "../../emits/selectable-ingredient-emits";

const props = defineProps<{
  ingredient: string;
}>();

const isSelected = ref(false);

var emit = defineEmits<SelectableIngredientEmits>();

function handleSelection() {
  isSelected.value = !isSelected.value;

  if (!isSelected.value) return;

  emit("addIngredient", props.ingredient);
}
</script>

<template>
  <button @click="handleSelection">
    <Tag :texto="props.ingredient" :ativa="isSelected" />
  </button>
</template>
