<script setup>
import { ref } from "vue";
import CartProductCard from "../components/CartProductCard.vue";
import CartSummary from "../components/CartSummary.vue";
import {
  deleteItemFromCart,
  shoppingCartKey,
  changeItemQuantity,
} from "../shoppingCartHelpers.js";

const currentCart = ref(JSON.parse(localStorage.getItem(shoppingCartKey)));

// This functions will be passed as a prop to CartProductCard component in order to use it on DelteModal
const deleteProduct = (productIndex) => {
  deleteItemFromCart(productIndex, currentCart.value);
};

const changeProductQuantity = (productIndex, quantity) => {
  changeItemQuantity(productIndex, currentCart.value, quantity);
};

const handleBuyCart = () => {
  if (currentCart.value.length > 0) {
    const currentBuys = JSON.parse(localStorage.getItem("buys"));
    currentBuys.push({
      products: currentCart.value,
      date: new Date().toLocaleDateString(),
    });

    // Add all current cart into buys array and clear the cart
    localStorage.setItem("buys", JSON.stringify(currentBuys));
    localStorage.setItem(shoppingCartKey, JSON.stringify([]));
    currentCart.value = [];
  } else {
    alert("No hay productos en el carrito para comprar");
  }
};
</script>

<template>
  <section class="flex w-[80%] mx-auto mt-8 justify-between">
    <section class="min-w-[45dvw]">
      <h2 class="text-3xl border-2 border-black px-1.5 py-1 rounded-md">
        TU CARRITO DE COMPRAS!
      </h2>
      <ul class="flex flex-col gap-2 mt-4" v-if="currentCart.length > 0">
        <li v-for="product in currentCart" :key="product.id">
          <CartProductCard
            :product="product"
            :deleteProduct="deleteProduct"
            :changeProductQuantity="changeProductQuantity"
          />
        </li>
      </ul>
      <section
        class="flex justify-center items-center bg-slate-50 mt-[0.5rem] min-h-[30dvh] text-center text-xl font-semibold rounded-lg shadow-md"
        v-else
      >
        <span> Aún no tienes productos en el carrito 😢 </span>
      </section>
      <button
        class="bg-[#E0D11D] bg-opacity-80 text-black max-w-fit px-4 py-0.5 rounded-lg font-semibold text-[1.2rem] mt-2 hover:text-white hover:bg-[#A1953D] transition-all duration-300"
        @click="() => $router.push('productos')"
      >
        Ver más productos!
      </button>
    </section>
    <section class="min-w-[33dvw]">
      <h2 class="text-3xl border-2 border-black px-1.5 py-1 rounded-md">
        CUENTA DE COBRO!
      </h2>
      <CartSummary :currentCart="currentCart" :handleBuyCart="handleBuyCart" />
    </section>
  </section>
</template>
