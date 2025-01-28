import { createProductListing } from "./create-product-listing.js";
import { addProductListing } from "./addProductListing.js";
import { productSystem } from "../index.js";
function addSearchEventListener() {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-button");

  searchButton.addEventListener("click", () => {
    const searchValue = Number(searchInput.value);
    const filteredResults = productSystem.filterByProductId(searchValue);
    const productListContainer = document.querySelector(
      ".product-list-container"
    );
    productListContainer.innerHTML = "";
    filteredResults.forEach((product) => {
      addProductListing(
        createProductListing(
          product.getProductId(),
          product.getProductName(),
          product.getPrice(),
          product.getImage(),
          product.getDescription()
        )
      );
    });
  });
}

export { addSearchEventListener };
