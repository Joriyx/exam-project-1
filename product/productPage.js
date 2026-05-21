import { getProduct } from "../src/js/api.js";
import { createProductDetails } from "../src/js/product.js";
import { refreshProfileHeader } from "../account/account.js";

async function refreshProductPage() {
  refreshProductPage();
  const productDetail = document.getElementById("product-details");
  if (!productDetail) {
    return;
  }
  productDetail.innerHTML = "";
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");
  if (!id) {
    const msg = document.createElement("h1");
    msg.textContent = "Product not found";
    productDetail.appendChild(msg);
    return;
  }
  const product = await getProduct(id);
  if (!product) {
    const msg = document.createElement("h1");
    msg.textContent = "Product not found";
    productDetail.appendChild(msg);
    return;
  }

  const productSections = createProductDetails(product);
  productDetail.append(...productSections);
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshProductPage();
  }
};
