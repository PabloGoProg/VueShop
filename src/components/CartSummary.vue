<script setup>
import { showCurrency } from "../helpers";
import ModalBuyCart from "../components/ModalBuyCart.vue";

const props = defineProps({
  currentCart: {
    type: Array,
    required: true,
  },
  handleBuyCart: {
    type: Function,
    required: true,
  },
});

const getTotalCost = () => {
  return props.currentCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
};
</script>

<template>
  <section class="flex flex-col gap-[1rem]">
    <details class="bg-slate-50 mt-[1rem] p-[1rem] shadow-md">
      <summary
        class="flex justify-between bg-gray-200 font-semibold px-2 py-1 hover:cursor-pointer hover:bg-gray-300 transition-all duration-300 rounded-md text-xl"
      >
        <span class="font-light"> 📝 Total de la cuenta: </span>
        <span>{{ showCurrency(getTotalCost()) }} COP</span>
      </summary>
      <ul class="bg-gray-100 py-1 px-4 text-lg">
        <li
          class="flex justify-between"
          v-for="product in currentCart"
          :key="product.id"
        >
          <span class="font-light">{{ product.name }}</span>
          <span class="font-semibold"
            >({{ product.quantity }} unidades)
            {{ showCurrency(product.price * product.quantity) }} COP</span
          >
        </li>
        <li
          class="flex justify-between border-t-[0.1rem] mt-[0.4rem] border-gray-300"
        >
          <span class="font-light">Suma totoal:</span>
          <span class="font-semibold"
            >{{ showCurrency(getTotalCost()) }} COP</span
          >
        </li>
      </ul>
    </details>
    <ModalBuyCart
      :buttonText="'Realizar compra! 🛒'"
      :handleBuyCart="props.handleBuyCart"
    />
  </section>
</template>
