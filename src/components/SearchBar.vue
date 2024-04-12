<script setup>
import { ref } from "vue";
import { fetchProducts } from "../API/products.js";

const props = defineProps({
  currentProducts: {
    type: Array,
    required: true,
  },
  updateFilteredProducts: {
    type: Function,
    required: true,
  },
});

const searchValue = ref("");
const filteredProducts = ref([]);

const handleChangeInput = (event) => {
  searchValue.value = event.target.value;
};

const filterProducts = () => {
  filteredProducts.value = [];
  for (let product of props.currentProducts) {
    if (product.name.toLowerCase().includes(searchValue.value.toLowerCase())) {
      filteredProducts.value.push(product);
    }
  }

  props.updateFilteredProducts(filteredProducts.value);
};
</script>

<template>
  <section class="w-[75dvw] flex justify-center gap-4">
    <input
      class="w-[65dvw] text-lg h-10 border-2 border-black rounded-md px-2"
      type="text"
      name="search"
      placeholder="Buscar producto"
      @input="(event) => handleChangeInput(event)"
    />
    <button
      class="w-[10dvw] bg-[#E6D57F] text-black text-lg font-semibold rounded-md px-2 py-1 hover:shadow-md transition-all duration-300"
      @click="filterProducts"
    >
      Buscar
    </button>
  </section>
</template>
