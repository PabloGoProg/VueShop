<script setup>
import { ref } from "vue";
import { createProduct } from "../API/products";

const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  currentProducts: {
    type: Array,
    required: true,
  },
});

const openModal = ref(false);
const loading = ref(false);

const inputValues = ref({
  name: "",
  price: 0,
  expiration: "",
});

const handleChangeInput = (event) => {
  const { id, value } = event.target;
  inputValues.value = {
    ...inputValues.value,
    [id]: value,
  };
};

const handleCreateProduct = async () => {
  const { name, price, expiration } = inputValues.value;
  if (name === "" && name.length <= 5) {
    return;
  } else if (price === 0 || price < 0) {
    return;
  }

  if (!expiration) {
    inputValues.value.expiration = null;
  }

  let newIndex = 0;
  for (let i = 0; i < props.currentProducts.length; i++) {
    if (props.currentProducts[i].id > newIndex) {
      newIndex = props.currentProducts[i].id;
    }
  }

  inputValues.value.id = newIndex + 1;

  createProduct(loading, inputValues.value);
  openModal.value = !openModal.value;
};
</script>

<template>
  <section>
    <button
      class="mx-auto bg-gray-300 text-black text-lg font-semibold rounded-lg max-w-fit px-2 py-1 hover:shadow-md hover:bg-green-500 transition-all duration-300"
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
        class="max-w-[30dvw] flex flex-col gap-[1.4rem] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg p-[1rem] z-10"
        v-if="openModal && loading === false"
      >
        <h3 class="text-xl font-semibold">Ingresar datos del producto 📝</h3>
        <form class="flex flex-col gap-4" action="">
          <input
            class="bg-gray-100 text-black text-opacity-70 rounded-lg px-2 py-1"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre del producto"
            @input="(event) => handleChangeInput(event)"
          />
          <input
            class="bg-gray-100 text-black text-opacity-70 rounded-lg px-2 py-1"
            type="number"
            id="price"
            name="price"
            placeholder="Precio del producto"
            @input="(event) => handleChangeInput(event)"
          />
          <div class="flex flex-col gap-2">
            <label for="expiration">Fecha de expiración</label>
            <input
              class="bg-gray-100 text-black text-opacity-70 rounded-lg px-2 py-1"
              type="date"
              id="expiration"
              name="expiration"
              @input="(event) => handleChangeInput(event)"
            />
          </div>
          <button
            class="mx-auto bg-gray-300 text-black text-lg font-semibold rounded-lg max-w-fit px-2 py-1 hover:shadow-md hover:bg-green-500 transition-all duration-300"
            @click="handleCreateProduct(loading, inputValues)"
          >
            + Crear producto
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
