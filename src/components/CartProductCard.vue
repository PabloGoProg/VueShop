<script setup>

  import { showCurrency } from '../helpers.js'

  const props = defineProps({
    product: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true
      },
      expiration: {
        type: String,
        required: false,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }
  });

</script>

<template>
  <section class="flex gap-[1dvw] bg-slate-50">
    <img class="w-[9dvw] opacity-50" src="../assets/image.svg" alt="product image template">
    <section class="flex flex-col min-w-[34.5dvw]">
      <div class="flex justify-between">
        <span class="text-lg font-semibold">{{ product.name }}</span>
        <div>
          <!-- Delete button and change quantity -->
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <span>
            Precio unitario:
          </span>
          <span>{{ showCurrency(product.price) }} COP</span>
        </div>
        <div class="flex justify-between">
          <span>Precio acumulado:</span>
          <span>({{ product.quantity }}) unidades {{ showCurrency((product.price * product.quantity)) }} COP</span>
        </div>
      </div>
    </section>
  </section>
</template>