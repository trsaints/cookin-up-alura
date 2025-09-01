<script setup lang="ts">
import type { YourListProps } from "@/views/props/your-list.props";
import IngredientTag from "../ingredient-tag/ingredient-tag.vue";

const props = defineProps<YourListProps>();
</script>

<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto"> Sua lista: </span>

    <ul v-if="props.ingredients.length > 0" class="ingredientes-sua-lista">
      <li v-for="i in props.ingredients" :key="i">
        <IngredientTag :texto="i" ativa />
      </li>
    </ul>

    <p v-else class="paragrafo lista-vazia">
      <img
        src="@/assets/imagens/icones/lista-vazia.svg"
        alt="Ícone de pesquisa"
      />
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<style scoped>
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
</style>
