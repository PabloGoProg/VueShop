const baseURL = 'http://localhost:8000'

const fetchProducts = async (productList, loading) => {
  try {
    loading.value = true;
    const res = await fetch(baseURL + "/products")
      .then((res) => res.json())
      .then((data) => {
        productList.value.push(...data);
      })
      .finally(() => (loading.value = false));
  } catch (error) {
    console.error(error);
  }
};

const createProduct = async (loading, product) => {
  try {
    loading.value = true;
    const res = await fetch(baseURL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .finally(() => (loading.value = false));
  } catch (error) {
    console.error(error);
  }

}

const editProduct = async (product, callback) => {
  try {
    const res = await fetch(baseURL + `/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        callback;
      })
  } catch (error) {
    console.error(error);
  }
}

const deleteProduct = async (productIndex) => {
  try {
    const res = await fetch(baseURL + `/products/${productIndex}`, {
      method: "DELETE",
    })
      .then((res) => console.log(res))
  } catch (error) {
    console.error(error);
  }
}

export { 
  baseURL,
  fetchProducts,
  createProduct,
  editProduct,
  deleteProduct
};