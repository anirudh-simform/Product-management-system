import { productSystem } from "../index.js";
import { editableProductListing } from "./editable-product-listing.js";
import { addEditableProductListing } from "./add-editable-product-listing.js";
function addEditableProducts() {
  const productList = productSystem.getProductList();

  productList.forEach((product) => {
    addEditableProductListing(
      editableProductListing(
        product.getProductId(),
        product.getProductName(),
        product.getPrice(),
        product.getImage(),
        product.getDescription()
      )
    );
  });
}

export { addEditableProducts };
