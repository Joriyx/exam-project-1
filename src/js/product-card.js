export function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "card";

  const a = document.createElement("a");
  a.href = "/product/index.html?id=" + product.id;
  article.appendChild(a);
  const productImage = document.createElement("img");
  productImage.className = "list-img";
  productImage.src = product.image.url;
  productImage.alt = product.image.alt;
  a.appendChild(productImage);

  const hgroup = document.createElement("hgroup");
  article.appendChild(hgroup);
  const h3 = document.createElement("h3");
  h3.textContent = product.title;
  hgroup.appendChild(h3);
  const p = document.createElement("p");
  p.textContent = product.price + "nok";
  hgroup.appendChild(p);

  return article;
}
