// Adds product to the product container
function addProductListing(productListing) {
  const productsContainer = document.querySelector(".product-list-container");
  productsContainer.appendChild(productListing);
}

export { addProductListing };
