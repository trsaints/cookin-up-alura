<script setup lang="ts">
import type { RecipesSelectionProps } from "@/views/props/recipes-selection-props";
import RecipeCard from "../recipe-card/recipe-card.vue";
import type { RecipesSelectionEmits } from "@/views/emits/main-content.emits";

const props = defineProps<RecipesSelectionProps>();
const emits = defineEmits<RecipesSelectionEmits>();
</script>

<template>
  <article class="recipes-selection">
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

    <button class="btn-highlight" @click="$emit('editIngredients')">
      Editar Lista
    </button>
  </article>
</template>

<style scoped>
:where(.recipes-selection .btn-highlight) {
  display: block;
  margin-inline: auto;
}

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
  margin-bottom: 32px;
}

:where(.no-content p) {
  font-size: 1.25rem;
}
</style>
