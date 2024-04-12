<script setup>
import { ref } from "vue";
import { deleteProduct, fetchProducts } from "../API/products";

const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  productIndex: {
    type: Number,
    required: true,
  },
  handleDeleteProduct: {
    type: Function,
    required: true,
  },
});

const openModal = ref(false);

const handleDeleteProduct = () => {
  deleteProduct(props.productIndex);

  props.handleDeleteProduct();
  openModal.value = !openModal.value;
};
</script>

<template>
  <section>
    <button
      class="mx-auto bg-gray-300 text-black text-lg font-semibold rounded-lg max-w-fit px-2 py-1 hover:shadow-md hover:bg-red-400 transition-all duration-300"
      @click="openModal = true"
    >
      {{ buttonText }}
    </button>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="openModal"
        @click="openModal = false"
      ></div>
    </transition>
    <transition name="fade" appear>
      <div
        class="max-w-[30dvw] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg p-[1rem] z-10"
        v-if="openModal"
      >
        <form class="flex flex-col gap-[1.4rem]" action="">
          <span class="font-normal text-xl text-center">
            Estás seguro de que quieres eliminar el producto?</span
          >
          <button
            class="mx-auto bg-gray-300 text-black text-lg font-semibold rounded-lg max-w-fit px-2 py-1 hover:shadow-md hover:bg-red-400 transition-all duration-300"
            @click="handleDeleteProduct"
          >
            Estoy seguro!
          </button>
        </form>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
