import {
  addToFavorites,
  removeFromFavorites,
  itemsInFavoritesCount,
} from "./favorite.js";

import { addToCart } from "./cart.js";

export function createFavoriteCard(product) {
  const article = document.createElement("article");

  const productThumbnail = document.createElement("span");
  productThumbnail.className = "product-thumbnail";
  article.appendChild(productThumbnail);
  const productThumbnailImg = document.createElement("img");
  productThumbnailImg.src = product.image.url;
  productThumbnailImg.alt = product.image.alt;
  productThumbnail.appendChild(productThumbnailImg);

  const productName = document.createElement("h2");
  productName.className = "product-name";
  productName.textContent = product.title;
  article.appendChild(productName);

  const productPrice = document.createElement("p");
  productPrice.className = "price";
  productPrice.textContent = product.price;
  article.appendChild(productPrice);

  const favoriteButton = document.createElement("button");
  favoriteButton.className = "favorite";
  article.appendChild(favoriteButton);
  const favoriteButtonImg = document.createElement("img");
  favoriteButtonImg.src = "/assets/icons/heart-filled-icon.svg";
  favoriteButtonImg.alt = "a heart";

  favoriteButton.onclick = onTrashClick;
  favoriteButton.appendChild(favoriteButtonImg);

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  article.appendChild(removeButton);
  const removeButtonImg = document.createElement("img");
  removeButtonImg.src = "/assets/icons/Trashcan-icon.svg";
  removeButtonImg.alt = "a trashcan";
  function onTrashClick() {
    removeFromFavorites(product.id);
    const count = itemsInFavoritesCount();
    if (count <= 0) {
      const noItems = document.createElement("article");
      const noItemsH2 = document.createElement("h2");
      noItemsH2.textContent = "No Products in wishlist";
      noItems.appendChild(noItemsH2);
      article.replaceWith(noItems);
    } else {
      article.remove();
    }
  }
  removeButton.onclick = onTrashClick;
  removeButton.appendChild(removeButtonImg);

  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Add to cart";
  function buttonOnClick() {
    addToCart(product);
  }
  article.appendChild(button);

  button.onclick = buttonOnClick;

  return article;
}
