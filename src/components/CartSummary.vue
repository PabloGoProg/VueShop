<script setup>
import { ref } from "vue";
import { showCurrency } from "../helpers";

const props = defineProps({
  currentCart: {
    type: Array,
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
    <button
      class="bg-[#E0D11D] bg-opacity-80 text-black max-w-fit px-4 py-0.5 rounded-lg font-semibold text-[1.2rem] hover:text-white hover:bg-[#A1953D] transition-all duration-300"
    >
      Realizar compra! 🛒
    </button>
  </section>
</template>
