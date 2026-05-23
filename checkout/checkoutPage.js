import { refreshProfileHeader } from "../account/account.js";
import { refreshCartCounter } from "../src/js/cart.js";
import { refreshFavoritesCounter } from "../src/js/favorite.js";

refreshCartCounter();
refreshFavoritesCounter();

async function refreshCheckoutPage() {
  refreshProfileHeader();
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshCheckoutPage();
  }
};
