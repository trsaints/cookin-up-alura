<script setup lang="ts">
import type { RecipesSelectionProps } from "@/views/props/recipes-selection-props";
import RecipeCard from "../recipe-card/recipe-card.vue";

const props = defineProps<RecipesSelectionProps>();
</script>

<template>
  <article>
    <header class="selection-header">
      <h2>Receitas</h2>

      <p>Resultados encontrados: {{ props.recipes.length }}</p>
    </header>

    <ul class="recipes" v-if="recipes.length">
      <li v-for="recipe in props.recipes" :key="recipe.nome">
        <RecipeCard :recipe="recipe" />
      </li>
    </ul>

    <aside v-else class="no-content">
      <p>
        Ops! Não encontramos resultados para a sua combinação. Vamos tentar de
        novo?
      </p>

      <img src="/imagens/no_recipes.svg" alt="" />
    </aside>
  </article>
</template>

<style scoped>
.selection-header {
  text-align: center;
  margin-bottom: 32px;
}

:where(.selection-header p) {
  font-size: 1.25rem;
  color: var(--verde-medio);
}

.recipes {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}

.no-content {
  text-align: center;
}

:where(.no-content p) {
  font-size: 1.25rem;
}
</style>
