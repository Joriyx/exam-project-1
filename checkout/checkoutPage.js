import { refreshProfileHeader } from "../account/account.js";
import { refreshCartCounter, clearCart, getCart } from "../src/js/cart.js";
import {
  refreshFavoritesCounter,
  removeFromFavorites,
} from "../src/js/favorite.js";

refreshCartCounter();
refreshFavoritesCounter();

async function refreshCheckoutPage() {
  refreshProfileHeader();

  const clearButton = document.getElementById("checkout-button");
  if (clearButton) {
    function onClearClick(event) {
      event.preventDefault();
      const cart = getCart();
      for (let i = 0; i < cart.length; i++) {
        removeFromFavorites(cart[i].id);
      }
      clearCart();
      window.location.replace("/success/index.html");
    }
    clearButton.onclick = onClearClick;
  }
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshCheckoutPage();
  }
};
