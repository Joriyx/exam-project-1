export function addToCart(product) {
  const cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    if (element.id === product.id) {
      element.amount++;
      sessionStorage.setItem("cart", JSON.stringify(cart));
      refreshCartCounter();
      refreshCartTotal();
      return;
    }
  }
  const newEntry = {
    id: product.id,
    amount: 1,
    info: product,
  };
  cart.push(newEntry);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  refreshCartCounter();
  refreshCartTotal();
}

export function removeFromCart(id) {
  const cart = getCart().filter((product) => {
    return product.id != id;
  });
  sessionStorage.setItem("cart", JSON.stringify(cart));
  refreshCartCounter();
  refreshCartTotal();
}

export function removeOneProduct(id) {
  const cart = getCart();
  const productIndex = cart.findIndex((product) => {
    return product.id === id;
  });
  if (productIndex < 0) return;
  const amount = cart[productIndex].amount;
  if (amount > 1) {
    cart[productIndex].amount--;
    sessionStorage.setItem("cart", JSON.stringify(cart));
    refreshCartCounter();
    refreshCartTotal();
  } else {
    removeFromCart(id);
  }
}

export function clearCart() {
  sessionStorage.removeItem("cart");
  refreshCartCounter();
  refreshCartTotal();
}

export function getCart() {
  const cart = sessionStorage.getItem("cart");
  if (!cart) {
    return [];
  }

  return JSON.parse(cart);
}

export function isProductInCart(id) {
  return getCart().some((product) => {
    return product.id === id;
  });
}

export function getProductCount(id) {
  const cart = getCart();
  const productIndex = cart.findIndex((product) => {
    return product.id === id;
  });
  if (productIndex < 0) return 0;
  return cart[productIndex].amount;
}

export function itemsInCartCount() {
  let totalCount = 0;
  const cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    totalCount += cart[i].amount;
  }
  return totalCount;
}

export function refreshCartCounter() {
  const cartCount = document.getElementById("cart_count");
  if (!cartCount) {
    return;
  }
  cartCount.textContent = itemsInCartCount();
}

export function refreshCartTotal() {
  let total = 0;
  const cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
    total += cart[i].info.price * cart[i].amount;
  }

  const subTotal = total + 80;

  const totalPrice = document.getElementById("total-price");
  if (totalPrice) {
    totalPrice.textContent = subTotal.toFixed(2) + "NOK";
  }

  const productsPrice = document.getElementById("products-price");
  if (productsPrice) {
    productsPrice.textContent = total.toFixed(2) + "NOK";
  }
}
