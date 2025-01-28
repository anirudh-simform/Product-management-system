import { createProductListing } from "./create-product-listing.js";
import { addProductListing } from "./addProductListing.js";
import { productSystem } from "../index.js";
function displayProducts() {
  const productArray = productSystem.getProductList();
  productArray.forEach((product) => {
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
}

export { displayProducts };
