<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Category } from "@/data/models/Category";
import CardCategoria from "@/views/components/category-card/CardCategoria.vue";
import type { SelectableIngredientEmits } from "../emits/selectable-ingredient-emits";
import { CategoryService } from "@/server/services/category-service";

const categories = ref<Category[]>([]);

onMounted(async () => {
  categories.value = await CategoryService.getAllCategories();
});

const emit = defineEmits<SelectableIngredientEmits>();
</script>

<template>
  <article class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
      <li v-for="categoria in categories" :key="categoria.nome">
        <CardCategoria
          :categoria="categoria"
          @add-ingredient="$emit('addIngredient', $event)"
          @remove-ingredient="$emit('removeIngredient', $event)"
        />
      </li>
    </ul>

    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>

    <button class="search" type="button">Buscar receitas!</button>
  </article>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

.search {
  border-radius: 64px;
  padding: 16px 64px;
  background-color: var(--coral);
  color: var(--branco);
  font-weight: 600;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
