<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const navLinks = [
  { text: "Principal", path: "/" },
  { text: "Productos", path: "/productos" },
  { text: "Carrito", path: "/carrito" },
  { text: "Compras", path: "/mis-compras" },
  { text: "Opciones", path: "/opciones" },
];

const currentPath = ref(window.location.pathname);

const setNewPath = (newPath) => {
  currentPath.value = newPath;
};
</script>

<template>
  <section
    class="flex items-center max-w-[75dvw] bg-[#EEE] bg-opacity-80 mx-auto max-h-fit mt-3 rounded-full shadow-md"
  >
    <img class="pl-[2rem]" src="" alt="logo" />
    <nav class="mx-auto font-normal text-xl">
      <ul class="flex gap-[1rem] text-black">
        <li class="p-[0.5rem]" v-for="link in navLinks">
          <RouterLink
            class="p-[0.5rem] text-black font-semibold border-b-2 border-red-600 transition-all duration-100"
            v-if="currentPath == link.path"
            :to="link.path"
            >{{ link.text }}</RouterLink
          >
          <RouterLink
            class="p-[0.5rem] text-black hover:text-red-400 font-light border-b-2 transition-all duration-100"
            v-else
            :to="link.path"
            @click="setNewPath(link.path)"
          >
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </section>
</template>
