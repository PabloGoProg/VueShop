<script setup>
  import { ref } from 'vue';

  const loading = ref(true)
  const productList = ref([])

  const fetchProducts = () => {
    try {
      const res = fetch("http://127.0.0.1:8000/products")
        .then((res) => res.json())
        .then((data) => {
          productList.value.push(...data)
        })
        .finally(() => (loading.value = false))
    } catch (error) {
      console.error(error);
    }
  }

  fetchProducts()
</script>

><template>
  <section>
    <h2>
      Products
    </h2>
    <ul>
      <li v-for="product in productList" :key="product.id">
        {{ product.id }}
        {{ product.name }}
        {{ product.price }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
</style>