import { refreshProfileHeader } from "../account/account.js";
import { refreshFavoritesCounter } from "../src/js/favorite.js";

refreshFavoritesCounter();

async function refreshSuccessPage() {
  refreshProfileHeader();
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshSuccessPage();
  }
};
