<script setup>

  const props = defineProps({
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
  });

  const showCurrency = (value) => {
    try {
      const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      });
      return formatter.format(value);
    } catch (error) {
      return `COP ${value.toFixed(2)}`; 
    }
  }

</script>

<template>
  <section class="max-h-fit bg-[#EEE] bg-opacity-30 mt-6 rounded-b-lg shadow-md hover:shadow-lg">
    <img class="w-[24dvw] h-[30dvh] bg-[#EEE] rounded-t-lg opacity-40" src="../assets/image.svg" alt="Product image template">
    <section class="flex flex-col px-3 py-2 gap-1">
      <div class="flex justify-between text-[1.2rem] items-center">
        <span class="font-semibold">{{ name }}</span>
        <span>{{ showCurrency(price) + ' COP'}}</span>
      </div>
      <span v-if="expiration">
        Expira el {{ expiration }}
      </span>
      <button class="bg-[#E0D11D] bg-opacity-80 text-white max-w-fit px-4 py-0.5 rounded-lg font-semibold text-[1.2rem] mt-2 hover:bg-[#A1953D] transition-all duration-300 ">
        Añadir al carrito
      </button>
    </section>
  </section>
</template>

<style scoped>
</style>