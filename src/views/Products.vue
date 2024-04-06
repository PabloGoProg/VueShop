<script setup>
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
import Loading from "../components/Loading.vue";
import { fetchProducts } from "../API/products.js";

const loading = ref(true);
const productList = ref([]);

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
    <ul class="flex justify-center gap-[2rem]">
      <li v-for="product in productList" :key="product.id">
        <ProductCard :product="product" />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
