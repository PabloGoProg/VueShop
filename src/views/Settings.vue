<script setup>
import SearchBar from "../components/SearchBar.vue";
import ModalCreateProduct from "../components/ModalCreateProduct.vue";
import { fetchProducts } from "../API/products.js";
import { ref } from "vue";
import Loading from "../components/Loading.vue";
import ManageProductCard from "../components/ManageProductCard.vue";

const loading = ref(true);
const currentProducts = ref([]);

fetchProducts(currentProducts, loading);

const handleUpdateProducts = () => {
  currentProducts.value = [];
  fetchProducts(currentProducts, loading);
};
</script>

<template>
  <section v-if="loading">
    <Loading />
  </section>
  <section v-else class="max-w-[75dvw] mx-auto mt-[1.5rem]">
    <h2 class="text-3xl border-2 border-black px-1.5 py-1 rounded-md">
      CONFIGURA TUS PRODUCTOS! 🛍️
    </h2>
    <div class="flex justify-between gap-[1rem] mt-[1rem]">
      <SearchBar />
      <ModalCreateProduct
        :buttonText="'+ Añandir producto'"
        :currentProducts="currentProducts"
      />
    </div>
    <ul class="flex justify-center gap-[1Prem]">
      <li class="" v-for="product in currentProducts" :key="product.id">
        <ManageProductCard
          :product="product"
          :handleUpdateProducts="handleUpdateProducts"
        />
      </li>
    </ul>
  </section>
</template>
