<script setup lang="ts">
import { ref } from "vue";
import Tag from "../Tag.vue";
import type { SelectableIngredientEmits } from "../../emits/emits";

const props = defineProps<{
  ingrediente: string;
}>();

const isSelected = ref(false);

var emit = defineEmits<SelectableIngredientEmits>();

function handleSelection() {
  isSelected.value = !isSelected.value;

  if (!isSelected.value) return;

  emit("adicionarIngrediente", props.ingrediente);
}
</script>

<template>
  <button @click="handleSelection">
    <Tag :texto="props.ingrediente" :ativa="isSelected" />
  </button>
</template>
