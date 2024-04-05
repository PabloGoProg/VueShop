const shoppingCartKey = 'shoppingCart';

const searchProductInCart = (productIndex, currentCart) => {
  for (let i = 0; i < currentCart.length; i++) {
    if (currentCart[i].id === productIndex) {
      return i;
    }
  }
  return -1;
}

const addItemToCart = (currentCart, product) => {
  // Validate if product was previously added
  const product_index = searchProductInCart(product.id, currentCart);
  if(product_index >= 0) {
    currentCart[product_index].quantity += 1;
    return;
  } 

  // If the product wasn't found in curentCart, the we addd it with base quantity 
  product.quantity = 1;
  currentCart.push(product);
  localStorage.setItem(shoppingCartKey, JSON.stringify(currentCart));
  console.log(currentCart);
}

const deleteItemFromCart = (productId, currentCart) => {
  console.log(currentCart)
  const product_index = searchProductInCart(productId, currentCart);
  console.log(product_index)
  if(product_index === -1) return;

  currentCart.splice(product_index, 1);
  localStorage.setItem(shoppingCartKey, JSON.stringify(currentCart));
}

export {
  searchProductInCart,
  addItemToCart,
  deleteItemFromCart,
  shoppingCartKey
}