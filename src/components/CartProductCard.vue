<script setup>

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
        default: 'No aplica'
      }
    }
  });

</script>

<template>
  <section class="flex gap-[1dvw]">
    <img src="../assets/image.svg" alt="product image template">
    <section>
      <div class="flex justify-between">
        <span>{{ product.name }}</span>
        <div>
          <!-- Delete button and change quantity -->
        </div>
      </div>
      <div>
        <div>
          <span>
            Precio unitario:
          </span>
          <span>{{  }}</span>
        </div>
      </div>
      <div></div>
    </section>
  </section>
</template>