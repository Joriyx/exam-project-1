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
  favoriteButton.appendChild(favoriteButtonImg);

  const removeButton = document.createElement("button");
  removeButton.className = "favorite";
  article.appendChild(removeButton);
  const removeButtonImg = document.createElement("img");
  removeButtonImg.src = "/assets/icons/Trashcan-icon.svg";
  removeButtonImg.alt = "a trashcan";
  removeButton.appendChild(removeButtonImg);

  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Add to cart";
}
