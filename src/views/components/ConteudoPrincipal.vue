<script lang="ts" setup>
import { ref } from "vue";
import SelectIngredients from "./select-ingredients.vue";
import YourList from "@/views/components/your-list/your-list.vue";
import { MainContentViewModel } from "@/views/models/main-content.vm";
import type { SelectedPage } from "@/data/types/SelectedPage";
import RecipesSelection from "./recipes-selection/recipes-selection.vue";

const ingredients = ref<string[]>([]);
const selectedPage = ref<SelectedPage>("SelecionarIngredientes");

const vm = new MainContentViewModel(ingredients);
</script>

<template>
  <main class="conteudo-principal">
    <YourList :ingredients="ingredients" />

    <SelectIngredients
      v-if="selectedPage === 'SelecionarIngredientes'"
      @add-ingredient="(ingredient) => vm.addIngredient(ingredient)"
      @remove-ingredient="(ingredient) => vm.removeIngredient(ingredient)"
    />

    <RecipesSelection v-if="selectedPage === 'MostrarReceitas'" />
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
