// ShoppingCart key on LocalStorage
const shoppingCartKey = 'shoppingCart';

const searchProductInCart = (productIndex, currentCart) => {
  for (let i = 0; i < currentCart.length; i++) {
    console.log(currentCart[i].id, productIndex)
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

  // If the product wasn't found in curentCart, then we addd it with base quantity 
  product.quantity = 1;
  currentCart.push(product);
  // Updates shoppinCart object in LocalStorage
  localStorage.setItem(shoppingCartKey, JSON.stringify(currentCart));
}

const deleteItemFromCart = (productId, currentCart) => {
  // validate if productId exists on the current cart
  const product_index = searchProductInCart(productId, currentCart);
  if(product_index === -1) return;

  // Delete found index, then update the current cart
  currentCart.splice(product_index, 1);
  localStorage.setItem(shoppingCartKey, JSON.stringify(currentCart));
}

const changeItemQuantity = (productId, currentCart, newQuantity) => {
  // validate if productId exists on the current cart
  const product_index = searchProductInCart(productId, currentCart);
  if(product_index === -1) return;

  // Update quantity of the product
  currentCart[product_index].quantity = newQuantity;
  localStorage.setItem(shoppingCartKey, JSON.stringify(currentCart));

}

export {
  searchProductInCart,
  addItemToCart,
  deleteItemFromCart,
  changeItemQuantity,
  shoppingCartKey
}