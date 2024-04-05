<script setup>
import { showCurrency } from "../helpers.js";
import ModalDelete from "./ModalDelete.vue";

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
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  deleteProduct: {
    type: Function,
    required: true,
  },
});

const emit = defineEmits(["deleteProductEmit"]);
</script>

<template>
  <section class="flex gap-[1dvw] bg-slate-50 rounded-lg shadow-sm">
    <img
      class="w-[7dvw] opacity-50"
      src="../assets/image.svg"
      alt="product image template"
    />
    <section class="flex flex-col min-w-[36dvw] justify-evenly">
      <div class="flex justify-between items-center">
        <span class="text-lg font-semibold">{{ product.name }}</span>
        <div>
          <ModalDelete
            :buttonText="'Eliminar'"
            :productIndex="product.id"
            :deleteProduct="props.deleteProduct"
          />
        </div>
      </div>
      <div>
        <div class="">
          <div class="flex justify-between">
            <span> Precio unitario: </span>
            <span>{{ showCurrency(product.price) }} COP</span>
          </div>
          <div class="flex justify-between">
            <span>Precio acumulado:</span>
            <span
              >({{ product.quantity }}) unidades
              {{ showCurrency(product.price * product.quantity) }} COP</span
            >
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
