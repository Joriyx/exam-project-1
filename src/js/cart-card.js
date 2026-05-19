export function createCartCard(product) {
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
  article.appendChild(productName);

  const productPrice = document.createElement("p");
  productPrice.className = "price";
  article.appendChild(productPrice);

  const favoriteButton = document.createElement("button");
  favoriteButton.className = "favorite";
  article.appendChild(favoriteButton);
  const favoriteButtonImg = document.createElement("img");
  favoriteButtonImg.src = "/assets/icons/heart-filled-icon.svg";
  favoriteButtonImg.alt = "a heart";
  favoriteButton.appendChild(favoriteButtonImg);

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  article.appendChild(removeButton);
  const removeButtonImg = document.createElement("img");
  removeButtonImg.src = "/assets/icons/trashcan-icon.svg";
  removeButtonImg.alt = "a trashcan";
  removeButton.appendChild(removeButtonImg);

  const amount = document.createElement("div");
  amount.className = "amount";
  article.appendChild(amount);

  const minusButton = document.createElement("button");
  amount.appendChild(minusButton);
  const minusButtonImg = document.createElement("img");
  removeButtonImg.src = "/assets/icons/minus-icon.svg";
  removeButtonImg.alt = "a minus icon";
  minusButton.appendChild(minusButtonImg);

  const amountNumber = document.createElement("p");
  amountNumber.className = "1";
  amount.appendChild(amountNumber);

  const plusButton = document.createElement("button");
  amount.appendChild(plusButton);
  const plusButtonImg = document.createElement("img");
  plusButtonImg.src = "/assets/icons/plus-icon.svg";
  plusButtonImg.alt = "a plus icon";
  plusButton.appendChild(plusButtonImg);
}
