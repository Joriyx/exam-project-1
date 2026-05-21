import { refreshProfileHeader } from "../account/account.js";
import { createFavoriteCard } from "../src/js/favorite-card.js";
import {
  addToFavorites,
  removeFromFavorites,
  itemsInFavoritesCount,
  refreshFavoritesTotal,
} from "../src/js/favorite.js";
import { getFavorites } from "../src/js/favorite.js";
import { addToCart } from "../src/js/cart.js";

async function refreshFavoritePage() {
  refreshProfileHeader();
  refreshFavoritesTotal();
  const favoritesList = document.getElementById("favorite-list");
  if (favoritesList) {
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

  const addAllButton = document.getElementById("all-to-cart");
  if (addAllButton) {
    function onAddAllClicked() {
      const favorites = getFavorites();
      for (let i = 0; i < favorites.length; i++) {
        addToCart(favorites[i]);
      }
    }
    addAllButton.onclick = onAddAllClicked;
  }
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshFavoritePage();
  }
};
