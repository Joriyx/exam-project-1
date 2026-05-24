import { isLoggedIn } from "../../account/account.js";

export function addToFavorites(product, basePath = "/") {
  if (!isLoggedIn()) {
    window.location.assign(basePath + "account/login.html");
    return;
  }
  const favorites = getFavorites();
  for (let i = 0; i < favorites.length; i++) {
    const element = favorites[i];
    if (element.id === product.id) {
      return;
    }
  }
  favorites.push(product);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  refreshFavoritesCounter();
  refreshFavoritesTotal();
}

export function removeFromFavorites(id) {
  const favorites = getFavorites().filter((product) => {
    return product.id != id;
  });
  localStorage.setItem("favorites", JSON.stringify(favorites));
  refreshFavoritesCounter();
  refreshFavoritesTotal();
}

export function clearFavorites() {
  localStorage.removeItem("favorites");
  refreshFavoritesCounter();
  refreshFavoritesTotal();
}

export function getFavorites() {
  if (!isLoggedIn()) {
    return [];
  }
  const favorites = localStorage.getItem("favorites");
  if (!favorites) {
    return [];
  }

  return JSON.parse(favorites);
}

export function isProductInFavorites(id) {
  return getFavorites().some((product) => {
    return product.id === id;
  });
}

export function itemsInFavoritesCount() {
  return getFavorites().length;
}

export function refreshFavoritesCounter() {
  const favoritesCount = document.getElementById("favorite-count");
  if (!favoritesCount) {
    return;
  }
  favoritesCount.textContent = itemsInFavoritesCount();
}

export function refreshFavoritesTotal() {
  let total = 0;
  const products = getFavorites();
  for (let i = 0; i < products.length; i++) {
    total += products[i].price;
  }

  const totalPrice = document.getElementById("total-price-favorite");
  if (!totalPrice) {
    return;
  }
  totalPrice.textContent = total.toFixed(2) + "NOK";
}
