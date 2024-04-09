<script setup>
import { showCurrency, formatDateString } from "../helpers.js";
import { ref } from "vue";
import { shoppingCartKey, addItemToCart } from "../shoppingCartHelpers";

const props = defineProps({
  product: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    expiration: {
      type: String,
      required: false,
    },
  },
});

const currentCart = ref(JSON.parse(localStorage.getItem(shoppingCartKey)));

const searchProductInCart = () => {
  const found = currentCart.value.some(
    (cartProduct) => cartProduct.id === props.product.id
  );
  return found;
};

const isInCart = ref(searchProductInCart());

const addToCart = () => {
  addItemToCart(currentCart.value, props.product);
  isInCart.value = !isInCart.value;
};
</script>

<template>
  <section
    class="max-h-fit bg-[#EEE] bg-opacity-30 rounded-b-lg shadow-md hover:shadow-lg"
  >
    <img
      class="w-[24dvw] h-[30dvh] bg-[#EEE] rounded-t-lg opacity-40"
      src="../assets/image.svg"
      alt="Product image template"
    />
    <section class="flex flex-col px-3 py-2 gap-1">
      <div class="flex justify-between text-[1.2rem] items-center">
        <span class="font-semibold">{{ product.name }}</span>
        <span>{{ showCurrency(product.price) + " COP" }}</span>
      </div>
      <span v-if="product.expiration">
        Expira el {{ product.expiration }}
      </span>
      <span v-else> No aplica </span>
      <button
        class="bg-[#E0D11D] bg-opacity-80 text-white max-w-fit px-4 py-0.5 rounded-lg font-semibold text-[1.2rem] mt-2 hover:bg-[#A1953D] transition-all duration-300"
        v-if="!isInCart"
        @click="addToCart"
      >
        Añadir al carrito
      </button>
      <button
        class="bg-green-500 bg-opacity-80 text-white max-w-fit px-4 py-0.5 rounded-lg font-semibold text-[1.2rem] mt-2 hover:bg-red-500 transition-all duration-300"
        v-else
      >
        En tu carrito!
      </button>
    </section>
  </section>
</template>

<style scoped></style>
