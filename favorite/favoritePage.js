import { refreshProfileHeader } from "../account/account.js";
import { createFavoriteCard } from "../src/js/favorite-card.js";
import {
  addToFavorites,
  removeFromFavorites,
  itemsInFavoritesCount,
} from "../src/js/favorite.js";
import { getFavorites } from "../src/js/favorite.js";

async function refreshFavoritePage() {
  refreshProfileHeader();
  const favoritesList = document.getElementById("favorite-list");
  if (!favoritesList) {
    return;
  }
  favoritesList.innerHTML = "";
  const products = getFavorites();
  if (products.length === 0) {
    const noItems = document.createElement("article");
    favoritesList.appendChild(noItems);
    const noItemsH2 = document.createElement("h2");
    noItemsH2.textContent = "No Products in wishlist";
    noItems.appendChild(noItemsH2);
    return;
  }

  for (let i = 0; i < products.length; i++) {
    favoritesList.appendChild(createFavoriteCard(products[i]));
  }
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshFavoritePage();
  }
};
