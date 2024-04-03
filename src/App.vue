<script setup>

import { RouterView } from 'vue-router';
import Pageheader from './components/Pageheader.vue'

</script>

<template>
  <Pageheader />
  <section>
    <RouterView />
  </section>
</template>

