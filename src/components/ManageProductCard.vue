<script setup>
import { showCurrency } from "../helpers.js";
import ModalDeleteProduct from "./ModalDeleteProduct.vue";
import ModalEditProduct from "./ModalEditProduct.vue";

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
</script>

<template>
  <section
    class="max-h-fit bg-[#EEE] bg-opacity-30 mt-6 rounded-b-lg shadow-md hover:shadow-lg"
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
      <div class="flex gap-[1rem] mx-auto mt-4">
        <ModalEditProduct
          :buttonText="'✏️  Editar producto!'"
          :product="props.product"
        />
        <ModalDeleteProduct
          :buttonText="'🗑️  Eliminar producto'"
          :productIndex="props.product.id"
        />
      </div>
    </section>
  </section>
</template>

<style scoped></style>
