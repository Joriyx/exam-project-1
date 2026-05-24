import {
  addToFavorites,
  removeFromFavorites,
  isProductInFavorites,
} from "./favorite.js";

export function createCarousel(product) {
  const article = document.createElement("article");
  article.id = "carousel-article";

  const a = document.createElement("a");
  a.href = "./product/index.html?id=" + product.id;
  article.appendChild(a);
  const productImage = document.createElement("img");
  productImage.className = "carousel-image";
  productImage.src = product.image.url;
  productImage.alt = product.image.alt;
  a.appendChild(productImage);

  const div = document.createElement("div");
  div.className = "carousel-info";
  article.appendChild(div);
  const hgroup = document.createElement("hgroup");
  div.appendChild(hgroup);
  const h3 = document.createElement("h3");
  h3.textContent = product.title;
  hgroup.appendChild(h3);
  const p = document.createElement("p");
  p.textContent = product.price + " " + "NOK";
  hgroup.appendChild(p);

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "button-group";
  div.appendChild(buttonGroup);

  const button = document.createElement("a");
  button.className = "button";
  button.href = "./product/index.html?id=" + product.id;
  button.textContent = "Buy now";
  buttonGroup.appendChild(button);

  const favoriteButton = document.createElement("button");
  favoriteButton.className = "favorite-button";
  buttonGroup.appendChild(favoriteButton);
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
      addToFavorites(product);
    } else {
      favoriteButtonImg.src = "./assets/icons/heart-white-icon.svg";
      removeFromFavorites(product.id);
    }
  }
  favoriteButton.onclick = onFavoriteClick;
  favoriteButton.appendChild(favoriteButtonImg);

  return article;
}
