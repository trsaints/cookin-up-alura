<script setup lang="ts">
import type { RecipesSelectionProps } from "@/views/props/recipes-selection-props";
import RecipeCard from "../recipe-card/recipe-card.vue";

const props = defineProps<RecipesSelectionProps>();
</script>

<template>
  <ul class="recipes" v-if="recipes.length">
    <li v-for="recipe in props.recipes" :key="recipe.nome">
      <RecipeCard :recipe="recipe" />
    </li>
  </ul>

  <p v-else>Ops! Não encontramos nenhuma receita com esses ingredientes.</p>
</template>

<style scoped>
.recipes {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
</style>
