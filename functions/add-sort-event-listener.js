import { productSystem } from "../index.js";
import { createProductListing } from "./create-product-listing.js";
import { addProductListing } from "./add-product-listing.js";
function addSortEventListener() {
  const sortButton = document.querySelector(".sort");
  const chosenParameter = document.querySelector("#choose-parameter");
  const productListContainer = document.querySelector(
    ".product-list-container"
  );

  sortButton.addEventListener("click", () => {
    const value = chosenParameter.value;
    let sortedArray = [];

    switch (value) {
      case "product-id":
        sortedArray = productSystem.sortedByProductId();
        break;
      case "product-name":
        sortedArray = productSystem.sortedByProductName();
        break;
      case "product-price":
        sortedArray = productSystem.sortedByPrice();
        break;
      default:
        return;
    }

    // Alert user if trying to sort empty system
    if (sortedArray.length == 0) {
      alert("Cannot sort without products");
      return;
    }

    productListContainer.innerHTML = "";

    sortedArray.forEach((product) => {
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

export { addSortEventListener };
