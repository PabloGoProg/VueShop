<script setup>
  import { ref } from 'vue';
  import ProductCard from '../components/ProductCard.vue'
  import Loading from '../components/Loading.vue'

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
  <Loading v-if="loading" />
  <section class="" v-else>
    <h2>
      Products
    </h2>
    <ul class="flex justify-center gap-[2rem]">
      <li v-for="product in productList" :key="product.id">
        <ProductCard 
          :product="product"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
</style>