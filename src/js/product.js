export function createProductDetails(product) {
  const productImgSection = document.createElement("section");

  const a = document.createElement("a");
  a.className = "product-image";
  productImgSection.appendChild(a);

  const productImage = document.createElement("img");
  productImage.src = product.image.url;
  productImage.alt = product.image.alt;
  a.appendChild(productImage);

  const productDetailSection = document.createElement("section");
  productDetailSection.className = "product-info";

  const h1 = document.createElement("h1");
  h1.textContent = product.title;
  productDetailSection.appendChild(h1);

  const shareButton = document.createElement("button");
  h1.append(shareButton);
  const shareButtonImage = document.createElement("img");
  shareButtonImage.src = "/assets/icons/share-icons.svg";
  shareButtonImage.alt = "";
  shareButton.appendChild(shareButtonImage);

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productDetailSection.appendChild(productDescription);

  const tags = document.createElement("p");
  tags.className = "tags";
  for (let i = 0; i < product.tags.length; i++) {
    const tag = product.tags[i];
    const span = document.createElement("span");
    span.textContent = "#" + tag + " ";
  }
  productDetailSection.appendChild(tags);

  const price = document.createElement("p");
  price.textContent = product.price;
  productDetailSection.appendChild(price);

  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "ADD TO CART";
  productDetailSection.appendChild(button);

  const rating = document.createElement("h2");
  rating.textContent = "Rating";
  productDetailSection.appendChild(rating);

  const ratingDiv = document.createElement("div");
  ratingDiv.className = "stars";
  productDetailSection.appendChild(ratingDiv);
  const ratingNumber = document.createElement("p");
  ratingNumber.textContent = product.rating;
  ratingDiv.appendChild(ratingNumber);
  const ratingSpan = document.createElement("span");
  ratingDiv.appendChild(ratingSpan);
  const ratingStarsEmpty = document.createElement("img");
  ratingStarsEmpty.src = "/assets/icons/stars-empty-icon.svg";
  ratingStarsEmpty.alt = "empty stars ";
  ratingSpan.appendChild(ratingStarsEmpty);
  const ratingStars = document.createElement("img");
  ratingStars.className = "filled-stars";
  ratingStars.src = "/assets/icons/stars-icon.svg";
  ratingStars.alt = "filled stars ";
  const ratingPercent = (product.rating / 5) * 100;
  ratingStars.style.width = ratingPercent + "%";
  ratingSpan.appendChild(ratingStars);

  const review = document.createElement("h2");
  rating.textContent = "Review";
  productDetailSection.appendChild(review);

  for (let i = 0; i < product.reviews.length; i++) {
    const review = product.reviews[i];
    const card = createReviewCard(review);
    productDetailSection.appendChild(card);
  }

  return [productImgSection, productDetailSection];
}

function createReviewCard(review) {
  const reviewArticle = document.createElement("article");
  reviewArticle.className = "reviews";

  const reviewWriter = document.createElement("h3");
  reviewWriter.textContent = review.username;
  reviewArticle.appendChild(reviewWriter);

  const reviewsDiv = document.createElement("div");
  reviewsDiv.className = "stars small";
  reviewArticle.appendChild(reviewsDiv);
  const reviewsNumber = document.createElement("p");
  reviewsNumber.textContent = review.rating;
  reviewsDiv.appendChild(reviewsNumber);
  const reviewSpan = document.createElement("span");
  reviewsDiv.appendChild(reviewSpan);
  const reviewStarsEmpty = document.createElement("img");
  reviewStarsEmpty.src = "/assets/icons/stars-empty-icon.svg";
  reviewStarsEmpty.alt = "empty stars ";
  reviewSpan.appendChild(reviewStarsEmpty);
  const reviewStars = document.createElement("img");
  reviewStars.className = "filled-stars";
  reviewStars.src = "/assets/icons/stars-icon.svg";
  reviewStars.alt = "filled stars ";
  const reviewPercent = (review.rating / 5) * 100;
  reviewStars.style.width = reviewPercent + "%";
  reviewSpan.appendChild(reviewStars);
  const reviewDescription = document.createElement("p");
  reviewDescription.textContent = review.description;
  reviewArticle.appendChild(reviewDescription);

  return reviewArticle;
}
