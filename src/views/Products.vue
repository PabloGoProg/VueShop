<script setup>
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
import Loading from "../components/Loading.vue";
import SearchBar from "../components/SearchBar.vue";
import { fetchProducts } from "../API/products.js";

const loading = ref(true);
const productList = ref([]);

const filteredProducts = ref([]);

const updateFilteredProducts = (updatedFilteredProducts) => {
  filteredProducts.value = updatedFilteredProducts;
};

fetchProducts(productList, loading);
</script>

>
<template>
  <!-- If loading equals true, loading spinner will be displayed -->
  <Loading v-if="loading" />
  <section class="max-w-[75dvw] mx-auto mt-[1.5rem]" v-else>
    <h2 class="text-3xl border-2 border-black px-1.5 py-1 rounded-md">
      CATALOGO DE PRODUCTOS! 🛍️
    </h2>
    <div class="flex justify-between gap-[1rem] mt-[2rem]">
      <SearchBar
        :currentProducts="productList"
        :updateFilteredProducts="updateFilteredProducts"
      />
    </div>
    <ul class="grid grid-cols-3 grid-rows-3 gap-[1rem] mt-[1rem]">
      <li v-if="filteredProducts.length === 0" v-for="product in productList">
        <ProductCard :product="product" />
      </li>
      <li v-else v-for="product in filteredProducts">
        <ProductCard :product="product" />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
