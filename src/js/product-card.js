import {
  addToFavorites,
  removeFromFavorites,
  isProductInFavorites,
} from "./favorite.js";

export function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "card";

  const a = document.createElement("a");
  a.className = "img-container";
  a.href = "./product/index.html?id=" + product.id;
  article.appendChild(a);
  const productImage = document.createElement("img");
  productImage.className = "list-img";
  productImage.src = product.image.url;
  productImage.alt = product.image.alt || "Product";
  a.appendChild(productImage);

  const favoriteButton = document.createElement("button");
  favoriteButton.className = "favorite-button small";
  article.appendChild(favoriteButton);
  const favoriteButtonImg = document.createElement("img");
  favoriteButtonImg.src = "./assets/icons/heart-white-icon.svg";
  favoriteButtonImg.alt = "a heart";
  let isFavorite = isProductInFavorites(product.id);
  if (isFavorite) {
    favoriteButtonImg.src = "./assets/icons/heart-filled-icon.svg";
  } else {
    favoriteButtonImg.src = "./assets/icons/heart-white-icon.svg";
  }
  async function onFavoriteClick() {
    isFavorite = !isFavorite;
    if (isFavorite) {
      favoriteButtonImg.src = "./assets/icons/heart-filled-icon.svg";
      addToFavorites(product, "./");
    } else {
      favoriteButtonImg.src = "./assets/icons/heart-white-icon.svg";
      removeFromFavorites(product.id);
    }
  }
  favoriteButton.onclick = onFavoriteClick;
  favoriteButton.appendChild(favoriteButtonImg);

  const hgroup = document.createElement("hgroup");
  article.appendChild(hgroup);
  const h3 = document.createElement("h3");
  h3.textContent = product.title;
  hgroup.appendChild(h3);
  const p = document.createElement("p");
  p.textContent = product.discountedPrice + " " + "NOK";
  hgroup.appendChild(p);

  return article;
}
