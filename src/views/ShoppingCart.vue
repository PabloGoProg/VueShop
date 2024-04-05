<script setup>
import { ref } from "vue";
import CartProductCard from "../components/CartProductCard.vue";
import { deleteItemFromCart, shoppingCartKey } from "../shoppingCartHelpers.js";

const currentCart = ref(JSON.parse(localStorage.getItem(shoppingCartKey)));

// This functions will be passed as a prop to CartProductCard component in order to use it on DelteModal
const deleteProduct = (productIndex) => {
  deleteItemFromCart(productIndex, currentCart.value);
};
</script>

<template>
  <section class="flex w-[80%] mx-auto mt-8 justify-between">
    <section class="min-w-[45dvw]">
      <h2 class="text-3xl border-2 border-black px-1.5 py-1 rounded-md">
        TU CARRITO DE COMPRAS!
      </h2>
      <ul class="flex flex-col gap-2 mt-4">
        <li v-for="product in currentCart" :key="product.id">
          <CartProductCard :product="product" :deleteProduct="deleteProduct" />
        </li>
      </ul>
    </section>
    <section class="min-w-[33dvw]">
      <h2 class="text-3xl border-2 border-black px-1.5 py-1 rounded-md">
        CUENTA DE COBRO!
      </h2>
    </section>
  </section>
</template>
