import { refreshProfileHeader } from "../account/account.js";
import { refreshCartCounter, clearCart } from "../src/js/cart.js";
import { refreshFavoritesCounter } from "../src/js/favorite.js";

refreshCartCounter();
refreshFavoritesCounter();

async function refreshCheckoutPage() {
  refreshProfileHeader();

  const clearButton = document.getElementById("checkout-button");
  if (clearButton) {
    function onClearClick(event) {
      event.preventDefault();
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
