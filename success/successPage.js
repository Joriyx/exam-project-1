import { refreshProfileHeader } from "../account/account.js";
import { refreshFavoritesCounter } from "../src/js/favorite.js";
import { refreshCartCounter } from "../src/js/cart.js";

refreshCartCounter();
refreshFavoritesCounter();

async function refreshSuccessPage() {
  refreshProfileHeader();
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshSuccessPage();
  }
};
