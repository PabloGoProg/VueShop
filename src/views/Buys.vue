<script setup>
import { ref } from "vue";
import BuyCard from "../components/BuyCard.vue";

const currentBuys = ref(JSON.parse(localStorage.getItem("buys")));
</script>

<template>
  <section class="max-w-[60dvw] mx-auto mt-[1.5rem]">
    <h2 class="text-3xl border-2 border-black px-1.5 py-1 rounded-md">
      TUS COMPRAS!
    </h2>
    <ul class="flex flex-col mt-[1rem]">
      <li v-for="(buy, index) in currentBuys" :key="index">
        <BuyCard :buy="buy" />
      </li>
    </ul>
  </section>
</template>
