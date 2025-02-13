import { createProductListing } from "./create-product-listing.js";
import { addProductListing } from "./add-product-listing.js";
import { productSystem } from "../index.js";
import { removeAllElements } from "./remove-all-elements.js";
function addSearchEventListener() {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-button");

  searchButton.addEventListener("click", () => {
    const searchValue = Number(searchInput.value);
    const filteredResults = productSystem.filterByProductId(searchValue);

    // Alert user if searched result not found
    if (filteredResults.length == 0) {
      alert(
        "Product not found,try searching for a different product or check the product ID"
      );
      return;
    }
    const productListContainer = document.querySelector(
      ".product-list-container"
    );
    removeAllElements(productListContainer);
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
