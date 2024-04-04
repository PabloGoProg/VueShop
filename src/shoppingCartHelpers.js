const shoppingCartKey = 'shoppingCart';

const searchProductInCart = (productIndex, currentCart) => {
  currentCart.forEach((product, index) => {
    if(productIndex == product.id) {
      return index;
    }
  });

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

const deleteItemFromCart = () => {
  const product_index = searchProductInCart(product.id, currentCart);
  if(product_index === -1) return;


}

export {
  searchProductInCart,
  addItemToCart,
  deleteItemFromCart,
  shoppingCartKey
}