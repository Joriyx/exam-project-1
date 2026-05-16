export function createCarousel(product) {
  const article = document.createElement("article");
  article.id = "carousel-article";

  const a = document.createElement("a");
  a.href = "/product/index.html?id=" + product.id;
  article.appendChild(a);
  const productImage = document.createElement("img");
  productImage.className = "carousel-image";
  productImage.src = product.image.url;
  productImage.alt = product.image.alt;
  a.appendChild(productImage);

  const div = document.createElement("div");
  article.appendChild(div);
  const hgroup = document.createElement("hgroup");
  div.appendChild(hgroup);
  const h3 = document.createElement("h3");
  h3.textContent = product.title;
  hgroup.appendChild(h3);
  const p = document.createElement("p");
  p.textContent = product.price + " " + "NOK";
  hgroup.appendChild(p);

  const button = document.createElement("a");
  button.className = "button";
  button.href = "/product/index.html?id=" + product.id;
  button.textContent = "Buy now";
  div.appendChild(button);

  return article;
}
