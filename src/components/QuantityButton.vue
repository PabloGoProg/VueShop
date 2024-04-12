<script setup>
import { ref } from "vue";

const props = defineProps({
  productIndex: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  changeProductQuantity: {
    type: Function,
    required: true,
  },
});

const quantity = ref(props.quantity);

const handleChamngeQuantity = (event) => {
  const { name } = event.target;
  if (name === "subtract" && quantity.value > 1) {
    props.changeProductQuantity(props.productIndex, quantity.value - 1);
    quantity.value--;
  } else if (name === "add") {
    props.changeProductQuantity(props.productIndex, quantity.value + 1);
    quantity.value++;
  }
};
</script>

<template>
  <section class="flex items-center">
    <button
      class="bg-[#E0D11D] border-[0.1rem] border-[#E0D11D] rounded-tl-lg rounded-bl-lg px-3 text-lg hover:bg-[#A1953D] hover:text-white hover:border-[#A1953D] transition-all duration-300"
      name="subtract"
      @click="handleChamngeQuantity"
    >
      -
    </button>
    <span
      class="px-3 border-t-[0.1rem] border-b-[0.1rem] border-[#E0D11D] text-lg"
    >
      {{ quantity }}
    </span>
    <button
      class="bg-[#E0D11D] border-[0.1rem] border-[#E0D11D] rounded-tr-lg rounded-br-lg px-3 text-lg hover:bg-[#A1953D] hover:text-white hover:border-[#A1953D] transition-all duration-300"
      name="add"
      @click="handleChamngeQuantity"
    >
      +
    </button>
  </section>
</template>
