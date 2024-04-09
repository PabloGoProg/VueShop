<script setup>
const paths = [
  { text: "Explorar catalogo!", path: "/productos" },
  { text: "Mevisar mi carrito!", path: "/carrito" },
  { text: "Ver mis compras!", path: "/mis-compras" },
  { text: "Editar productos", path: "/opciones" },
];
</script>

<template>
  <section class="flex w-[90dvw] mx-auto">
    <section class="flex justify-center min-w-[50%] min-h-[80dvh]">
      <img class="w-[18rem]" src="../assets/vue.svg" alt="" />
      <img
        class="w-[16rem] relative top-[6rem] right-[7rem]"
        src="../assets/shop-svgrepo-com.svg"
        alt=""
      />
    </section>
    <section
      class="flex flex-col justify-center min-w-[50%] min-h-[90dvh] gap-4"
    >
      <button
        class="min-w-[25dvw] mx-auto bg-gray-300 text-black text-3xl font-semibold rounded-lg max-w-fit px-2 py-3 hover:shadow-md hover:bg-[#E6D57F] transition-all duration-300"
        v-for="path in paths"
        @click="() => $router.push(path.path)"
      >
        {{ path.text }}
      </button>
    </section>
  </section>
</template>
