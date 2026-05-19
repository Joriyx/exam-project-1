import {
  addToCart,
  removeFromCart,
  removeOneProduct,
  getProductCount,
  itemsInCartCount,
} from "./cart.js";

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
  removeButton.className = "remove-button";
  article.appendChild(removeButton);
  const removeButtonImg = document.createElement("img");
  removeButtonImg.src = "/assets/icons/Trashcan-icon.svg";
  removeButtonImg.alt = "a trashcan";
  function onTrashClick() {
    removeFromCart(product.id);
    const count = itemsInCartCount();
    if (count <= 0) {
      const noItems = document.createElement("article");
      const noItemsH2 = document.createElement("h2");
      noItemsH2.textContent = "No Products in cart";
      noItems.appendChild(noItemsH2);
      article.replaceWith(noItems);
    } else {
      article.remove();
    }
    amountNumber.textContent = getProductCount(product.id);
  }
  removeButton.onclick = onTrashClick;
  removeButton.appendChild(removeButtonImg);

  const amount = document.createElement("div");
  amount.className = "amount";
  article.appendChild(amount);

  const minusButton = document.createElement("button");
  amount.appendChild(minusButton);
  const minusButtonImg = document.createElement("img");
  minusButtonImg.src = "/assets/icons/minus-sign-icon.svg";
  minusButtonImg.alt = "a minus icon";
  function onMinusClick() {
    removeOneProduct(product.id);
    amountNumber.textContent = getProductCount(product.id);
  }
  minusButton.onclick = onMinusClick;
  minusButton.appendChild(minusButtonImg);

  const amountNumber = document.createElement("p");
  amountNumber.textContent = getProductCount(product.id);
  amount.appendChild(amountNumber);

  const plusButton = document.createElement("button");
  amount.appendChild(plusButton);
  const plusButtonImg = document.createElement("img");
  plusButtonImg.src = "/assets/icons/plus-sign-icon.svg";
  plusButtonImg.alt = "a plus icon";
  function onPlusClick() {
    addToCart(product);
    amountNumber.textContent = getProductCount(product.id);
  }
  plusButton.onclick = onPlusClick;
  plusButton.appendChild(plusButtonImg);

  return article;
}
