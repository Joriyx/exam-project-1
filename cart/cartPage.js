import { createCartCard } from "../src/js/cart-card.js";
import {
  addToCart,
  isProductInCart,
  refreshCartTotal,
  removeOneProduct,
  clearCart,
  refreshCartCounter,
  getCart,
} from "../src/js/cart.js";
import { getProducts } from "../src/js/api.js";
import { refreshProfileHeader } from "../account/account.js";
import { refreshFavoritesCounter } from "../src/js/favorite.js";

refreshCartCounter();
refreshCartTotal();
refreshFavoritesCounter();

async function refreshCartList() {
  const cartList = document.getElementById("cart-list");
  if (!cartList) {
    return;
  }
  cartList.innerHTML = "";
  const products = getCart();
  if (products.length === 0) {
    const noItems = document.createElement("article");
    cartList.appendChild(noItems);
    const noItemsH2 = document.createElement("h2");
    noItemsH2.textContent = "No Products in cart";
    noItems.appendChild(noItemsH2);
    return;
  }

  for (let i = 0; i < products.length; i++) {
    cartList.appendChild(createCartCard(products[i].info));
  }
}

function refreshCartPage() {
  refreshProfileHeader();
  const clearButton = document.getElementById("clear-button");
  if (clearButton) {
    function onClearClick() {
      clearCart();
      refreshCartList();
    }
    clearButton.onclick = onClearClick;
  }
  refreshCartList();
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshCartPage();
  }
};
