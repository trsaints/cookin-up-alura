<script setup lang="ts">
import type { RecipesSelectionProps } from "@/views/props/recipes-selection-props";
import { onMounted } from "vue";

const props = defineProps<RecipesSelectionProps>();

onMounted(() => console.log(props.recipes));
</script>

<template></template>
