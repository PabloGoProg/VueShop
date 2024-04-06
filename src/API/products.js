const fetchProducts = (productList, loading) => {
  try {
    loading.value = true;
    const res = fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => {
        productList.value.push(...data);
      })
      .finally(() => (loading.value = false));
  } catch (error) {
    console.error(error);
  }
};

export { fetchProducts };