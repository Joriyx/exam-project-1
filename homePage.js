import { createCarousel } from "./src/js/carousel.js";
import { createProductCard } from "./src/js/product-card.js";
import { getProducts } from "./src/js/api.js";
import { refreshProfileHeader } from "./account/account.js";

async function refreshCarousel(product) {
  const prev = document.getElementById("carousel-article");
  const next = createCarousel(product);
  if (prev) {
    prev.replaceWith(next);
  }
}

async function refreshHomePage() {
  refreshProfileHeader();
  const main = document.getElementById("home-content");
  if (!main) {
    return;
  }
  const products = await getProducts();
  if ("error" in products) {
    const errorMessage = document.createElement("h3");
    errorMessage.textContent = products.error;
    main.replaceChildren(errorMessage);
    return;
  }

  const arrowLeft = document.getElementById("carousel-arrow-left");
  const arrowRight = document.getElementById("carousel-arrow-right");
  let carouselIndex = 0;

  function showNextCarouselProduct() {
    carouselIndex = (carouselIndex + 1) % 3;
    const product = products[carouselIndex];
    refreshCarousel(product);
  }

  function showPrevCarouselProduct() {
    carouselIndex = (carouselIndex + 4) % 3;
    const product = products[carouselIndex];
    refreshCarousel(product);
  }

  arrowRight.onclick = showNextCarouselProduct;
  arrowLeft.onclick = showPrevCarouselProduct;
  refreshCarousel(products[0]);

  const electronics = [];
  const fashion = [];
  const other = [];

  for (const product of products) {
    if (product.tags.includes("electronics")) {
      electronics.push(product);
    } else if (product.tags.includes("fashion")) {
      fashion.push(product);
    } else {
      other.push(product);
    }
  }

  const electronicsList = document.getElementById("electronics");
  const fashionList = document.getElementById("fashion");
  const otherList = document.getElementById("other");

  for (const product of electronics) {
    const card = createProductCard(product);
    electronicsList.append(card);
  }

  for (const product of fashion) {
    const card = createProductCard(product);
    fashionList.append(card);
  }

  for (const product of other) {
    const card = createProductCard(product);
    otherList.append(card);
  }

  const electronicsArrowLeft = document.getElementById(
    "electronics-button-left",
  );
  const electronicsArrowRight = document.getElementById(
    "electronics-button-right",
  );

  const fashionArrowLeft = document.getElementById("fashion-button-left");
  const fashionArrowRight = document.getElementById("fashion-button-right");

  function showNextProductElectronics() {
    electronicsList.scrollBy(100, 0);
  }

  function showPrevProductElectronics() {
    electronicsList.scrollBy(-100, 0);
  }

  function showNextProductFashion() {
    fashionList.scrollBy(100, 0);
  }

  function showPrevProductFashion() {
    fashionList.scrollBy(-100, 0);
  }

  electronicsArrowRight.onclick = showNextProductElectronics;
  electronicsArrowLeft.onclick = showPrevProductElectronics;

  fashionArrowRight.onclick = showNextProductFashion;
  fashionArrowLeft.onclick = showPrevProductFashion;
}

document.onreadystatechange = refreshHomePage;
