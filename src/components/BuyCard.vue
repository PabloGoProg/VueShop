<script setup>
import { showCurrency, formatDateString } from "../helpers";

const props = defineProps({
  buy: {
    products: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
});

const calcTotal = () => {
  return props.buy.products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
};
</script>

<template>
  <section class="flex flex-col p-2">
    <div
      class="flex justify-between bg-gray-300 px-2 py-1 text-lg font-semibold rounded-md shadow-md"
    >
      <span> Valor de compra: {{ showCurrency(calcTotal()) }} COP </span>
      <span> Fecha: {{ formatDateString(buy.date) }} </span>
    </div>
    <div class="bg-gray-100 px-2 py-1 text-lg rounded-b-md shadow-md">
      <h3 class="font-semibold text-lg">
        📝 Listado de árticulos adquiridos:
        <ul class="px-6">
          <li
            class="flex justify-between font-light"
            v-for="product in buy.products"
            :key="product.id"
          >
            <span>
              {{ product.name }} - ({{ product.quantity }} unidades -
              {{ showCurrency(product.price) }} COP c/u)
            </span>
            <span>
              {{ showCurrency(product.price * product.quantity) }} COP
            </span>
          </li>
          <li class="flex justify-between border-t-[0.1rem] border-gray-300">
            <span class="font-light">Suma totoal:</span>
            <span class="font-semibold"
              >{{ showCurrency(calcTotal()) }} COP</span
            >
          </li>
        </ul>
      </h3>
    </div>
  </section>
</template>
