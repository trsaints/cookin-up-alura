<script setup lang="ts">
import type { RecipeCardProps } from "@/views/props/recipe-card-props";

const props = defineProps<RecipeCardProps>();
</script>

<template>
  <article class="recipe-card">
    <header>
      <img
        :src="'imagens/receitas/' + props.recipe.imagem"
        :alt="'Receita para ' + props.recipe.nome"
      />

      <h2 class="recipe-heading">{{ props.recipe.nome }}</h2>
    </header>
  </article>
</template>

<style scoped>
.recipe-card {
  border-radius: 16px;
  max-width: 282px;
  overflow: hidden;
  box-shadow: 4px 4px 12px rgba(68, 68, 68, 0.08);
}

.recipe-heading {
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  padding-block: 32px;
}
</style>
