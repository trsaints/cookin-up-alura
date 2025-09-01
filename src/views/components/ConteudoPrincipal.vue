<script lang="ts" setup>
import { computed, ref } from "vue";
import SelectIngredients from "@/views/components/select-ingredients.vue";
import YourList from "@/views/components/your-list/your-list.vue";
import { MainContentViewModel } from "@/views/models/main-content.vm";
import type { SelectedPage } from "@/data/types/SelectedPage";
import RecipesSelection from "@/views/components/recipes-selection/recipes-selection.vue";
import { RecipeService } from "@/server/services/recipe-serivce";
import type { Recipe } from "@/data/models/Recipe";

const allIngredients = ref<string[]>([]);
const allRecipes = ref<Recipe[]>([]);
const selectedPage = ref<SelectedPage>("SelecionarIngredientes");
const recipesService = new RecipeService();

const vm = new MainContentViewModel(
  allIngredients,
  allRecipes,
  selectedPage,
  recipesService
);

const isIngredientsPage = computed(
  () => selectedPage.value === "SelecionarIngredientes"
);

const isRecipesPage = computed(() => selectedPage.value === "MostrarReceitas");

const matchingRecipes = computed(() =>
  recipesService.byIngredients(allRecipes.value, allIngredients.value)
);
</script>

<template>
  <main class="conteudo-principal">
    <YourList :ingredients="allIngredients" />

    <SelectIngredients
      v-if="isIngredientsPage"
      @add-ingredient="(ingredient) => vm.addIngredient(ingredient)"
      @remove-ingredient="(ingredient) => vm.removeIngredient(ingredient)"
      @find-recipes="vm.renderRecipeSelection()"
    />

    <RecipesSelection v-if="isRecipesPage" :recipes="matchingRecipes" />
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
